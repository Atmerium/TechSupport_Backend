import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userEmail: string
  
  @IsString()
  @IsNotEmpty()
  userPassword: string
  
  @IsBoolean()
  userRememberMe: boolean
}
