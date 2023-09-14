import connection from "../config/db.js";

const deleteTask = (req, res) => {
  const taskId = req.params.id;

  // Check if the task ID is valid (e.g., it's an integer)
  if (!taskId || isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      error: "Bad Request",
      message: "Invalid task ID.",
    });
  }

  // SQL query to delete the task based on the ID
  const query = "DELETE FROM tasks WHERE id = ?";
  const values = [taskId];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({
        success: false,
        error: "Internal Server Error",
        message: "An error occurred while deleting the task from the database.",
        details: error.message,
      });
      return;
    }

    // Check if any rows were affected (task was deleted successfully)
    if (results.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Task not found with the given ID.",
      });
    }

    console.log('Task deleted successfully');
    res.json({
      success: true,
      message: "Task deleted successfully",
    });
  });
};

export default deleteTask;
