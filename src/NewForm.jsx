import React, { useState } from 'react';
import axios from 'axios';

export const NewForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if the 'text' field is empty
    if (task.trim() === '') {
      console.error('Task name cannot be empty');
      return;
    }

    try {
      // Make a POST request to add the task
      const result = await axios.post('/api/tasks/add', { task });
      console.log(result.data);
      
      // Reset the input field
      setTask('');
      
      // Notify the parent component that a task has been added
      if (onTaskAdded) {
        onTaskAdded(task);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text"></label>
      <input
        type="text"
        id="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">ADD TASK</button>
    </form>
  );
};
