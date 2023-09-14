import { useEffect, useState } from "react";
import axios from 'axios';
import { NewForm } from "./NewForm";
import { TasksList } from './TasksList';
import generateNewLastId from "./assets/generateNewLastId";
import resetId from "./assets/resetId";

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
/*   // Function to reset Id
  const resetId = async () => {
    try {
      await axios.get("/api/resetId");
      console.log('reset Ids successfully');
    } catch (err) {
      console.error(err);
    }
  }; */

  useEffect(() => {
    fetchTasks(); 
    resetId()
  }, []);
  
/* 
  const generateNewLastId = (prevItems) => {
    // get existing ids in prevItems
    const existingIds = prevItems.map((item) => item.id);
    // find the highest id || 0 if array empty
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // maxId++ for the new element 
    return maxId + 1;
  }; */

  // to update displayed taskList
  const addTask = (task) => {
    resetId();
    // give the new task the same stucture of the others
    const newTask = {
      id: generateNewLastId(items), 
      task_name: task, 
      completed: 0,
    };

    // update display
    setItems((prevItems) => [...prevItems,newTask]);
  };

  // Filter out the deleted task from the displayed taskList
  const deleteTask = async (taskId) => {
    try {
      // delete task
      await axios.delete(`/api/tasks/${taskId}`);
      // reset id
      await resetId();
      // update display
      setItems((prevItems) => prevItems.filter((item) => item.id !== taskId));
    } catch (error) {
      console.error('Error:', error);
    }
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
