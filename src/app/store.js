import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/Slices/todosSlice';
import themeReducer from '../features/Slices/themeSlice'

export const store = configureStore({
  reducer: {
    todos:todosReducer,
    theme:themeReducer,
  },
});
