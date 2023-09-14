import React from 'react';

export const TasksList = ({ items }) => {
  if (!items || items.length === 0) {
  // If items is null, undefined, or empty, display a loading message or indicator here.
    return <p>Loading...</p>;
  }

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
        </div>
      ))}
    </div>
  );
}
