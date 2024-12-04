// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';  // Import useDispatch from react-redux
import { TextField, Button, Box, Container, Paper } from '@mui/material';
import { editTask, addTask } from '../redux/taskSlice';  // Import the necessary actions

function TaskForm({ taskToEdit }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setTask({
        title: taskToEdit.title,
        description: taskToEdit.description,
        dueDate: taskToEdit.dueDate,
      });
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit.id, updatedTask: task })); // Dispatching the edit action
    } else {
      dispatch(addTask(task)); // Dispatching the add action
    }
    setTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          padding: 2,
          background: 'rgba(255, 255, 255, 0.8)', // Slight transparency
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #9b4dca, #ff008c)', // Gradient for the button
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff008c, #6a1b9a)',
              },
            }}
            type="submit"
            fullWidth
          >
            {taskToEdit ? 'Update Task' : 'Add Task'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default TaskForm;
