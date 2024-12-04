// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for tasks and filter
const initialState = {
  tasks: [], // List of tasks
  filter: 'all', // Filter state: 'all', 'completed', 'pending', 'overdue'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      const newTask = { ...action.payload, id: Date.now(), completed: false };
      state.tasks.push(newTask);
    },

    // Edit an existing task
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
      }
    },

    // Delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    // Toggle the completion state of a task
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    // Set the current filter (all, completed, pending, overdue)
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
