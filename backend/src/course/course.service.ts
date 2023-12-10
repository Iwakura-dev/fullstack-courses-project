import { HttpException, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ICourseObject } from './types/course-object';
@Injectable()
export class CourseService {
  private courses: ICourseObject[] = [];
  getAllCouresService(res: Response) {
    try {
      res.send(this.courses);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  createCourseService(course: ICourseObject): ICourseObject {
    try {
      this.courses.push(course);
      return course;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  deleteOneCouresService(id: number): void {
    this.courses = this.courses.filter((i) => i.id !== id);
  }
}
