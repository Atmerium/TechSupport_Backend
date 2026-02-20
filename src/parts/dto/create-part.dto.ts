import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePartDto {
    @IsString()
    @IsNotEmpty()
    partName: string
    
    @IsBoolean()
    @IsOptional()
    partVisible: boolean
}
