import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categoryName: string
    
    @IsBoolean()
    @IsOptional()
    categoryVisible: boolean
}
