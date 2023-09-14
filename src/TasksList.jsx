import React from 'react';
import axios from 'axios';

export const TasksList = ({ items, onDelete, setItems }) => {
  if (!items || items.length === 0) {
    // If items is null, undefined, or empty, display a loading message or indicator here.
    return <p>Loading...</p>;
  }

  const handleDelete = async (taskId) => {
    // Find the task index in the items array
    const taskIndex = items.findIndex((item) => item.id === taskId);
    if (taskIndex === -1) {
      console.error('Task not found in items array');
      return;
    }

    // Update  UI by removing the task from the items array
    const updatedItems = [...items];
    updatedItems.splice(taskIndex, 1);
    setItems(updatedItems);

    try {
      await axios.delete(`/api/tasks/${taskId}`);
      // Call the onDelete to update the task list
      onDelete(taskId);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div className="task" key={item.id}>
          <h3>{item.id}</h3>
          <p>{item.task_name}</p>
          <label>
            <input type="checkbox" />
            Completed: {item.completed}
          </label>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
