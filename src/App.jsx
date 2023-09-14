import { useEffect, useState } from "react";
import axios from 'axios';
import { NewForm } from "./NewForm";
import {TasksList} from './TasksList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks")
      .then(res => {
        // Axios automatically parses JSON response
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <h1>TodoList</h1>
      <NewForm />
      <TasksList items={items} />
    </main>
  );
}

export default App;
