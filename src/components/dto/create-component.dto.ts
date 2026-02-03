import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateComponentDto {
    @IsString()
    @IsNotEmpty()
    componentBrand: string
    
    @IsString()
    @IsOptional()
    componentDecription: string

    @IsOptional()
    @IsBoolean()
    adviceVisible: boolean
}
