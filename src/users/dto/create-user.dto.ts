import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userEmail: string
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userPassword: string
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  userRememberMe: boolean

  @ApiProperty()
  @IsString()
  @IsOptional()
  userRole: string

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  userVisible: boolean
}
