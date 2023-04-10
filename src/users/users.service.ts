import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: User["id"]) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: User["id"], updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: User["id"]) {
    return this.prisma.user.delete({ where: { id } });
  }
}
