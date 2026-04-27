import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

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

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @IsIn([1, 2], { message: "A buildCategory értéke csak 1 vagy 2 lehet." })
    buildCategory: number

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @IsIn([1, 2, 3], { message: "A buildClass értéke csak 1, 2 vagy 3 lehet." })
    buildClass: number
}
