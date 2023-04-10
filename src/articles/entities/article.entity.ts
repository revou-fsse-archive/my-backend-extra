import { Article } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ArticleEntity implements Article {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  slug: string | null;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty({ required: false, nullable: true })
  publishedAt: Date | null;

  @ApiProperty({ required: false, nullable: true })
  authorId: string | null;
}

export class ArticleIDEntity {
  @ApiProperty()
  id: string;
}

export class ArticleCountEntity {
  @ApiProperty()
  count: number;
}
