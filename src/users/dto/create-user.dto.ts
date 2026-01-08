import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userEmail: string
  
  @IsString()
  @IsNotEmpty()
  userPassword: string
  
  @IsBoolean()
  @IsOptional()
  userRememberMe: boolean

  @IsBoolean()
  @IsOptional()
  userVisible: boolean
}
