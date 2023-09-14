import express from "express";
import bodyParser from "body-parser";
/* import cors from "cors"; */
import router from "./controllers/index.js";
const app = express();
/* const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Credentials: true,
};

app.use(cors(corsOptions)) */
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  // serve react app
 });
 

app.use('/api', router)
/* app.use(require("cors")()); */



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started"));
