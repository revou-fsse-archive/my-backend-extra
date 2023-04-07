import { ApiProperty } from "@nestjs/swagger";
import { Article } from "@prisma/client";

export class CreateArticleDto {
  @ApiProperty({ default: "Example title" })
  title: Article["title"];

  @ApiProperty({ required: false, default: "Example description" })
  description?: Article["description"];

  @ApiProperty({ default: "Example body for longer content..." })
  body: Article["body"];

  @ApiProperty({ required: false, default: false })
  published?: Article["published"];
}
