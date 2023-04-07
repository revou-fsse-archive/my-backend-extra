import { Injectable } from "@nestjs/common";

import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";

import { PrismaService } from "src/prisma/prisma.service";
import { createArticleSlug } from "src/utils/slug";

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.article.findMany({
      where: {
        published: true,
        publishedAt: {
          lte: new Date(),
        },
      },
    });
  }

  findDrafts() {
    return this.prisma.article.findMany({
      where: { published: false },
    });
  }

  async findOne(id: string) {
    const article = await this.prisma.article.findUnique({ where: { id } });
    if (!article) return {};
    return article;
  }

  create(createArticleDto: CreateArticleDto) {
    try {
      return this.prisma.article.create({
        data: {
          ...createArticleDto,
          slug: createArticleSlug(createArticleDto.title),
          publishedAt: createArticleDto.published ? new Date() : null,
        },
      });
    } catch (error) {
      console.error(error);
      return { message: "Cannot create article" };
    }
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    try {
      return this.prisma.article.update({
        where: { id },
        data: {
          ...updateArticleDto,
          slug: createArticleSlug(updateArticleDto.title),
          publishedAt: updateArticleDto.published ? new Date() : null,
        },
      });
    } catch (error) {
      console.error(error);
      return { message: "Cannot update article" };
    }
  }

  remove(id: string) {
    return `This action removes a #${id} article`;
  }
}
