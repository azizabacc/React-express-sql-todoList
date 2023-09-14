import { useEffect, useState } from "react";
import axios from 'axios';
import { NewForm } from "./NewForm";
import { TasksList } from './TasksList';

function App() {
  const [items, setItems] = useState([]);

  // Function to fetch tasks from the server
  const fetchTasks = () => {
    axios.get("/api/tasks")
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
  
  useEffect(() => {
    fetchTasks(); 
  }, []);

  const generateNewLastId = (prevItems) => {
    // get existing ids in prevItems
    const existingIds = prevItems.map((item) => item.id);
    // find the highest id || 0 if array empty
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // maxId++ for the new element 
    return maxId + 1;
  };

  // to update displayed taskList
  const addTask = (task) => {
    // give the new task the same stucture of the others
    const newTask = {
      id: generateNewLastId(items), 
      task_name: task, 
      completed: 0,
    };
    // update display
    setItems((prevItems) => [newTask, ...prevItems]);
  };

  // Filter out the deleted task from the displayed taskList
  const deleteTask = async (taskId) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== taskId));

  };
  return (
    <main>
      <h1>TodoList</h1>
      <NewForm onTaskAdded={addTask} /> 
      <TasksList  items={items} onDelete={deleteTask} setItems={setItems} />
    </main>
  );
}

export default App;
