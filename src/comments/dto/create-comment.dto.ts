import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  commentContent: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  buildId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  userId: number;
}
