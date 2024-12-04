// src/components/TaskList.js
import React from 'react';
import { List, ListItem, ListItemText, Checkbox, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/taskSlice';

function TaskList({ tasks }) {
  const dispatch = useDispatch();

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} divider>
          <Checkbox
            checked={task.completed}
            onChange={() => handleToggleComplete(task.id)}
            color="primary"
          />
          <ListItemText primary={task.title} secondary={task.description} />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
