import { configureStore } from '@reduxjs/toolkit';
import stepsReducer from './step/stepsSlice';

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});
