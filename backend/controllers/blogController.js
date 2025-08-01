import Blog from "../models/Blog.js";

// Validation helper
const validateBlogData = (data) => {
  const errors = [];
  
  if (!data.title || data.title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (!data.content || data.content.trim().length === 0) {
    errors.push('Content is required');
  }
  
  if (!data.category || data.category.trim().length === 0) {
    errors.push('Category is required');
  }
  
  return errors;
};

export const createArticle = async (req, res) => {
  try {
    // Validate input data
    const validationErrors = validateBlogData(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationErrors 
      });
    }

    const newBlog = new Blog(req.body);
    const saved = await newBlog.save();
    
    console.log(`✅ Blog post created: ${saved.title}`);
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Error creating blog post:', error);
    res.status(400).json({ 
      error: 'Failed to create blog post', 
      message: error.message 
    });
  }
};

export const getAllArticle = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log(`📝 Retrieved ${blogs.length} blog posts`);
    res.json(blogs);
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error);
    res.status(500).json({ 
      error: 'Failed to fetch blog posts', 
      message: error.message 
    });
  }
};

export const getAllArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Blog ID is required' });
    }

    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).json({ 
        error: 'Blog post not found',
        message: 'The requested blog post does not exist' 
      });
    }
    
    console.log(`📖 Retrieved blog post: ${blog.title}`);
    res.json(blog);
  } catch (error) {
    console.error('❌ Error fetching blog post:', error);
    res.status(500).json({ 
      error: 'Failed to fetch blog post', 
      message: error.message 
    });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Blog ID is required' });
    }

    // Validate input data
    const validationErrors = validateBlogData(updateData);
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationErrors 
      });
    }

    const updated = await Blog.findByIdAndUpdate(
      id, 
      updateData, 
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    if (!updated) {
      return res.status(404).json({ 
        error: 'Blog post not found',
        message: 'The blog post you are trying to update does not exist' 
      });
    }
    
    console.log(`✏️ Blog post updated: ${updated.title}`);
    res.status(200).json(updated);
  } catch (error) {
    console.error('❌ Error updating blog post:', error);
    res.status(400).json({ 
      error: 'Failed to update blog post', 
      message: error.message 
    });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Blog ID is required' });
    }

    const deleted = await Blog.findByIdAndDelete(id);
    
    if (!deleted) {
      return res.status(404).json({ 
        error: 'Blog post not found',
        message: 'The blog post you are trying to delete does not exist' 
      });
    }
    
    console.log(`🗑️ Blog post deleted: ${deleted.title}`);
    res.json({ 
      message: "Blog post deleted successfully",
      deletedPost: {
        id: deleted._id,
        title: deleted.title
      }
    });
  } catch (error) {
    console.error('❌ Error deleting blog post:', error);
    res.status(500).json({ 
      error: 'Failed to delete blog post', 
      message: error.message 
    });
  }
};