import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {


  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  address: string


  @ApiProperty()
  @IsString()
  gender: string

  @ApiProperty()
  @IsString()
  contact: string

  @ApiProperty()
  @IsArray()
  education_detail: AddEductionDto[]

  @ApiProperty()
  @IsArray()
  work_exeperience: WorkExeperinceDto[]

  @ApiProperty()
  @IsArray()
  technical_exeperinence: TechnicalExperienceDto[]

  @ApiProperty()
  @IsArray()
  known_language: KnownLanguagesDto[]

}

export class EditUserDto extends CreateUserDto {
  @ApiProperty()
  @IsOptional()
  _id: string

}
export class AddEductionDto {
  @ApiProperty()
  @IsString()
  course: string

  @ApiProperty()
  @IsString()
  percentage: string

  @ApiProperty()
  @IsString()
  year: string

  @ApiProperty()
  @IsString()
  unversity: string

  @ApiProperty()
  @IsNumber()
  user_id: number

}

export class WorkExeperinceDto {
  @ApiProperty()
  @IsString()
  company: string

  @ApiProperty()
  @IsString()
  designation: string

  @ApiProperty()
  @IsString()
  from_date: string

  @ApiProperty()
  @IsString()
  end_date: string

  @ApiProperty()
  @IsNumber()
  user_id: number

}

export class TechnicalExperienceDto {
  @ApiProperty()
  @IsString()
  tech_name: string

  @ApiProperty()
  @IsNumber()
  exeperience_level: number

  @ApiProperty()
  @IsNumber()
  user_id: number

}

export class KnownLanguagesDto {

  @ApiProperty()
  @IsBoolean()
  Read: boolean

  @ApiProperty()
  @IsBoolean()
  write: boolean

  @ApiProperty()
  @IsBoolean()
  speake: boolean

  @ApiProperty()
  @IsNumber()
  user_id: number

  @ApiProperty()
  @IsNumber()
  language_id: number

}
export class LoginDto {
  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  username: string

  @ApiProperty()
  @IsString()
  password: string
}

export class JwtPayload {
  id: string
  username  : string
  password:string
}

export class PaginationDto {
  @ApiProperty()
  @IsNumber()
  page?: number;

  @ApiProperty()
  @IsNumber()// Optional: Page number (default: 1)
  limit?: number; // Optional: Maximum number of items per page (default: 10)
}