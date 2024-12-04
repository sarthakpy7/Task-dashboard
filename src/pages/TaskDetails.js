import React from 'react';
import { useParams } from 'react-router-dom';

function TaskDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Task Details</h1>
      <p>Displaying details for task with ID: {id}</p>
      {/* Your task detail UI will go here */}
    </div>
  );
}

export default TaskDetails;
