import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBrandDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    brandName: string
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    brandDescription: string

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    brandVisible: boolean
}
