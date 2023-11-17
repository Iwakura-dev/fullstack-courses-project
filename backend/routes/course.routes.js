import express from "express";
import { courseController } from "../controllers/course.controller.js";
export const router = express.Router();
router.post("/course", (req, res) => courseController.createCourse(req, res));
router.get("/course", (req, res) => courseController.getAllCourses(req, res));
router.get("/course/:id", (req, res) =>
  courseController.getOneCourse(req, res)
);
router.delete("/course/:id", (req, res) =>
  courseController.deleteOneCourse(req, res)
);
