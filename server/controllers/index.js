import express from "express";
import addTask from "./addTask.js"
import getTasks from "./getTasks.js"
const router = express.Router();

router.post('/tasks/add',addTask)
router.get('/tasks',getTasks)

export default router;