import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    brandName: string
    
    @IsString()
    @IsOptional()
    brandDescription: string

    @IsOptional()
    @IsBoolean()
    brandVisible: boolean
}
