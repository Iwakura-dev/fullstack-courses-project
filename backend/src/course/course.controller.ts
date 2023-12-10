import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CourseService } from './course.service';
import { ICourseObject } from './types/course-object';

@Controller('api')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get('all-course')
  getAllCourse(@Res() res: Response) {
    return this.courseService.getAllCouresService(res);
  }
  @Post('write-course')
  createCourse(@Body() todo: ICourseObject): ICourseObject {
    return this.courseService.createCourseService(todo);
  }
  @Delete('all-course/:id')
  deleteOneCoures(@Param('id') id: number) {
    this.courseService.deleteOneCouresService(Number(id));
  }
}
