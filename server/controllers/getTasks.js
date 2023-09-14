import connection from "../config/db.js";

const getTasks = (req, res) => {
    const query = "SELECT * FROM tasks";
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  };

  export default getTasks