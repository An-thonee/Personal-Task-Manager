import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getAllTask,
  getTaskById,
} from "../controllers/taskController";

const router = Router();

router.post("/create", createTask);
router.get("/", getAllTask);
router.get("/each/:id", getTaskById);
router.patch("/edit/:id", editTask);
router.delete("/delete/:id", deleteTask);
export default router;
