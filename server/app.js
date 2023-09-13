import express from "express";
const app = express();


/* app.use(require("cors")()); */

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
