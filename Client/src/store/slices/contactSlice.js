import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    formData: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    loading: false,
    success: false,
    error: null
  },
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      state.success = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    }
  }
});

export const { 
  updateFormField, 
  resetForm, 
  setLoading, 
  setSuccess, 
  setError 
} = contactSlice.actions;

// Selectors
export const selectContactForm = (state) => state.contact.formData;
export const selectContactLoading = (state) => state.contact.loading;
export const selectContactSuccess = (state) => state.contact.success;
export const selectContactError = (state) => state.contact.error;

export default contactSlice.reducer; 