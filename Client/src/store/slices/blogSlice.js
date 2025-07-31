import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blog';

// Async thunks pour les opérations CRUD
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createBlogPost = createAsyncThunk(
  'blog/createBlogPost',
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBlogPost = createAsyncThunk(
  'blog/updateBlogPost',
  async ({ id, postData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBlogPost = createAsyncThunk(
  'blog/deleteBlogPost',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    loading: false,
    error: null,
    selectedPost: null,
    filter: {
      category: '',
      searchTerm: '',
    },
  },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearFilter: (state) => {
      state.filter = { category: '', searchTerm: '' };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchBlogPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create post
      .addCase(createBlogPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update post
      .addCase(updateBlogPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.posts.findIndex(post => post._id === action.payload._id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete post
      .addCase(deleteBlogPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(post => post._id !== action.payload);
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedPost, setFilter, clearFilter } = blogSlice.actions;

// Selectors
export const selectAllPosts = (state) => state.blog.posts;
export const selectBlogLoading = (state) => state.blog.loading;
export const selectBlogError = (state) => state.blog.error;
export const selectSelectedPost = (state) => state.blog.selectedPost;
export const selectFilter = (state) => state.blog.filter;

// Selector avec filtres (HOF)
export const selectFilteredPosts = (state) => {
  const { posts, filter } = state.blog;
  return posts.filter(post => {
    const matchesCategory = !filter.category || post.category.toLowerCase().includes(filter.category.toLowerCase());
    const matchesSearch = !filter.searchTerm || 
      post.title.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(filter.searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};

export const selectRecentPosts = (state) => {
  const posts = selectAllPosts(state);
  return posts.slice(0, 3); // Retourne les 3 articles les plus récents
};

export default blogSlice.reducer; 