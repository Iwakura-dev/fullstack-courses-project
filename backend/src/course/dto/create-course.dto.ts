import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
export class CreateCourseDto {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  author_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Course name should have a litle bit char message' })
  header_course: string;

  @IsString()
  @IsNotEmpty({
    message: 'Description name should have a little bit char message',
  })
  description_name: string;
}
