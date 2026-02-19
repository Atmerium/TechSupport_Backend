import { IsNotEmpty, IsString } from "class-validator"

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    userEmail: string
    
    @IsString()
    @IsNotEmpty()
    userPassword: string
}
