import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './slices/companySlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer
  },
});
