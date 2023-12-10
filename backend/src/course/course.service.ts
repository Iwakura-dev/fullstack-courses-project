import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  async getAllCoures() {
    return 'Hello async world!';
  }
  async createCourse(createCourseDto: CreateCourseDto) {
    return 'Create course!';
  }
  async deleteOneCoures(id: number) {
    return 'Create course!';
  }
}
