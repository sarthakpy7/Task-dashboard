// src/pages/Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/taskSlice';
import { Grid, Box, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import TaskForm from '../components/TaskForm';

function Dashboard() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // all tasks
  });

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #9b4dca, #ff008c, #6a1b9a)', // Gradient background
        padding: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TaskForm />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            {filteredTasks.map((task) => (
              <Grid item xs={12} sm={6} md={4} key={task.id}>
                <Card
                  sx={{
                    minWidth: 275,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Card shadow
                    transition: 'all 0.3s ease', // Hover transition
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                      background: 'linear-gradient(135deg, #9b4dca, #ff008c)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{task.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{task.description}</Typography>
                    <Typography variant="body2" color="text.secondary">Due: {task.dueDate}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => dispatch(toggleComplete(task.id))}>
                      {task.completed ? 'Undo' : 'Complete'}
                    </Button>
                    <Button size="small" color="error" onClick={() => dispatch(deleteTask(task.id))}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
