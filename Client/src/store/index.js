import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import servicesReducer from './slices/servicesSlice';
import portfolioReducer from './slices/portfolioSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    services: servicesReducer,
    portfolio: portfolioReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 