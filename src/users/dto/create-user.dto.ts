import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  userEmail: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userName: string
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userPassword: string
  
  @IsBoolean()
  @IsOptional()
  userRememberMe: boolean

  @IsString()
  @IsOptional()
  userRole: string

  @IsBoolean()
  @IsOptional()
  userVisible: boolean
}
