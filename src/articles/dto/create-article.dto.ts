import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
  @ApiProperty({ default: "Example title" })
  title: string;

  @ApiProperty({ required: false, default: "Example description" })
  description?: string;

  @ApiProperty({ default: "Example body for longer content..." })
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean;
}
