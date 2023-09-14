import express from "express";
import addTask from "./addTask.js"
import getTasks from "./getTasks.js"
import deleteTask from "./deleteTask.js";
import resetId from "./resetId.js";
const router = express.Router();

router.post('/tasks/add',addTask)
router.delete('/tasks/:id',deleteTask)
router.get('/tasks',getTasks)
router.get('/resetId', resetId)

export default router;