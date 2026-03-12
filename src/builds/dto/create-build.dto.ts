import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBuildDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    buildName: string      
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    buildDescription: string

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    buildVisible: boolean
}
