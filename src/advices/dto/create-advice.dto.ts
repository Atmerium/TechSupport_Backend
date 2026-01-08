import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAdviceDto {
    @IsNotEmpty()
    @IsString()
    adviceContent: string

    @IsOptional()
    @IsBoolean()
    adviceVisible: boolean
}
