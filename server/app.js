import express from "express";
import connection from "./config/db.js";
const app = express();

const gettasks = (req, res) => {
  connection.query("SELECT * FROM tasks", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

/* app.use(require("cors")()); */
app.get('/tasks',gettasks)
const items = [
  {
    task: "sport",
    checked: "false",
  },
  {
    task: "study",
    checked: "false",
  },
];
app.get("/", (req, res) => {
 // serve react app
});

app.get("/api/items", (req, res) => {
  try {
    res.send(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started"));
