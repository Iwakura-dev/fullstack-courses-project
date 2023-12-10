import { HttpException, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { CreateCourseDto } from './dto/create-course.dto';
@Injectable()
export class CourseService {
  private courses: CreateCourseDto[] = [];
  getAllCouresService(res: Response) {
    try {
      res.send(this.courses);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  createCourseService(course: CreateCourseDto): CreateCourseDto {
    try {
      this.courses.push(course);
      return course;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  deleteOneCouresService(id: number): void {
    try {
      this.courses = this.courses.slice(1, id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
