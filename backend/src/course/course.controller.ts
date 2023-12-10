import {
  Body,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('api')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get('all-course')
  getAllCourse() {
    this.courseService.getAllCoures();
  }
  @Post('write-course')
  createCourse(@Body(new ValidationPipe()) createCourseDto: CreateCourseDto) {
    this.courseService.createCourse(createCourseDto);
  }
  @Delete('all-course/:id')
  deleteOneCoures(@Query('id', ParseIntPipe) id: number) {
    this.courseService.deleteOneCoures(id);
  }
}
