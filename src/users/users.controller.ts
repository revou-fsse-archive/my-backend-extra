import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@Controller("users")
@ApiTags("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param("id", ParseIntPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: UserEntity })
  update(
    @Param("id", ParseIntPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: UserEntity })
  remove(@Param("id", ParseIntPipe) id: string) {
    return this.usersService.remove(id);
  }
}
