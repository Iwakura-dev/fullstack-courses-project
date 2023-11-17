import { addCourse } from "../addCourse/addCourse.js";
class CourseController {
  async createCourse(req, res) {
    const course = {
      id: req.body.id,
      headerCourse: req.body.headerCourse,
      authorCourse: req.body.authorCourse,
      descriptionCourse: req.body.descriptionCourse,
    };
    addCourse.push(course);
    res.status(200).json(addCourse);
  }
  async getAllCourses(req, res) {
    res.status(200).json(addCourse);
  }
  async getOneCourse(req, res) {
    const id = req.params.id;
    const findCourseById = addCourse.find((el) => el.id === id);
    console.log("Find Course By Id", findCourseById);
    res.status(200).json(findCourseById);
  }
  async deleteOneCourse(req, res) {
    const id = req.params.id;
    const deleteCourse = addCourse.find((el) => el.id !== id);
    console.log("Delete Course >>>", deleteCourse);
    const index = addCourse.indexOf(deleteCourse);
    console.log("Index >>>", index);
    addCourse.splice(index, 1);
  }
}
export const courseController = new CourseController();
