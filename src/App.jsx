import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/items")
      .then(res => {
        // Axios automatically parses JSON response
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const renderItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.task}</h3>
          <p>Checked : {item.checked}</p>
        </div>
      );
    });
  }

  return (
    <main>
      <h1>TodoList</h1>
      {renderItems()}
    </main>
  );
}

export default App;
