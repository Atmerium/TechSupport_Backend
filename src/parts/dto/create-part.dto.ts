import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePartDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    partName: string
    
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    partVisible: boolean
}
