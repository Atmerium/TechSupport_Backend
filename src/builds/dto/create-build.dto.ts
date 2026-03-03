import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBuildDto {
    @IsString()
    @IsNotEmpty()
    buildName: string      
  
    @IsString()
    @IsOptional()
    buildDescription: string

    @IsBoolean()
    @IsOptional()
    buildVisible: boolean
}
