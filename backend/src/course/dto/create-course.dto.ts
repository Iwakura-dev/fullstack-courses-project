import { IsString, IsInt } from 'class-validator';
export class CreateCourseDto {
  @IsInt()
  id: string;

  @IsString()
  author_name: string;

  @IsString()
  course_name: string;

  @IsString()
  description_name: string;
}
