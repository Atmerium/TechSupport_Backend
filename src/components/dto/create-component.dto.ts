import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateComponentDto {
    @IsString()
    @IsNotEmpty()
    componentName: string
    
    @IsString()
    @IsOptional()
    componentDecription: string
    
    @IsOptional()
    @IsNumber()
    adviceId: number

    @IsOptional()
    @IsBoolean()
    adviceVisible: boolean
}
