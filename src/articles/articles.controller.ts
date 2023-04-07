import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

import {
  ArticleCountEntity,
  ArticleEntity,
  ArticleIDEntity,
} from "./entities/article.entity";
import { ArticlesService } from "./articles.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";

@Controller("articles")
@ApiTags("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get("drafts")
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get("ids")
  @ApiOkResponse({ type: ArticleIDEntity, isArray: true })
  findIDs() {
    return this.articlesService.findIDs();
  }

  @Get(":id")
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param("id") id: string) {
    return this.articlesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Put(":id")
  @ApiOkResponse({ type: ArticleEntity })
  update(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Patch(":id")
  @ApiOkResponse({ type: ArticleEntity })
  patch(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete()
  @ApiOkResponse({ type: ArticleCountEntity })
  removeAll() {
    return this.articlesService.removeAll();
  }

  @Delete(":id")
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param("id") id: string) {
    return this.articlesService.remove(id);
  }
}
