import { IsNumber, IsPositive, IsString } from 'class-validator';
export class CreateCourseDto {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  author_name: string;

  @IsString()
  course_name: string;

  @IsString()
  description_name: string;
}
