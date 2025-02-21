import { Injectable } from '@nestjs/common';
import { CreateWorkstationAccessDto } from './dto/create-workstation-access.dto';
import { UpdateWorkstationAccessDto } from './dto/update-workstation-access.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class WorkstationAccessService {

  constructor(private prisma:PrismaClient){}

  async setNewAccessDD(n:string, rId:string) {
    return this.prisma.accessRole.create({
      data:{
        name:n,
        rolesId:rId
      },
    });
  }

  findAll() {
    return this.prisma.accessRole.findMany();
    // return `This action returns all workstationAccess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workstationAccess`;
  }

  update(id: number, updateWorkstationAccessDto: UpdateWorkstationAccessDto) {
    return `This action updates a #${id} workstationAccess`;
  }

  remove(id: number) {
    return `This action removes a #${id} workstationAccess`;
  }
}
