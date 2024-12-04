// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

// Configuring the store with the task reducer
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Mapping the taskReducer to the tasks slice of the state
  },
});

export default store;
