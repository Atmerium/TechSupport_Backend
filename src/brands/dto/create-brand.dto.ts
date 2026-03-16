import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator"

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
    @IsPositive()
    @IsOptional()
    partId: number

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    brandVisible: boolean
}
