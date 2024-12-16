import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Prisma } from '@prisma/client';

@Module({
  controllers: [UsersController],
  providers: [UsersService],

})
export class UsersModule {}
