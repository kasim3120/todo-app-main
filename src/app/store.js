import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/counter/todosSlice';
import themeReducer from '../features/counter/themeSlice'

export const store = configureStore({
  reducer: {
    todos:todosReducer,
    theme:themeReducer,
  },
});
