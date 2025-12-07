import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdviceDto {
    @IsNotEmpty()
    @IsString()
    advice: string
}
