import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('api')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get('all-course')
  @HttpCode(200)
  getAllCourse(@Res() res: Response) {
    return this.courseService.getAllCouresService(res);
  }
  @Post('write-course')
  @HttpCode(201)
  createCourse(@Body(new ValidationPipe()) todo: CreateCourseDto) {
    return this.courseService.createCourseService(todo);
  }
  @Delete('all-course/:id')
  @HttpCode(202)
  deleteOneCoures(@Param('id') id: number) {
    console.log(id);
    this.courseService.deleteOneCouresService(Number(id));
  }
}
