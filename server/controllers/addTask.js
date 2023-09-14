import connection from "../config/db.js";

const addTask = (req, res) => {
  const task = req.body.task;
  const query = "INSERT INTO tasks (task_name) VALUES (?)";
  const value = [task];
  // check if ull or empty
  if (!task) {
    return res.status(400).json({
      success: false,
      error: "Bad Request",
      message: "Task name cannot be empty.",
    });
  }

  connection.query(query, value, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      // appropriate error code and a detailed error message
      res.status(500).json({
        success: false,
        error: "Internal Server Error",
        message: "An error occurred while adding the task to the database.",
        details: error.message // Include detailed error message if available
      });
      return;
    }
    
    console.log('Task posted successfully');
    res.json({
      success: true,
      message: "Task added successfully",
      result: results
    });
  });
};

export default addTask;