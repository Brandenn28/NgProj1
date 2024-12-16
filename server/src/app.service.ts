import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMyId(): string {
    return 'MyId';
  }

  // async getUser(id: string){
  //   return await this.prisma.user.findUnique({
  //     where: {id: Number(id) },
  //   })
  // } 
}
