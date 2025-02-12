import { Injectable } from '@nestjs/common';
import { CreateWorkstationAccessDto } from './dto/create-workstation-access.dto';
import { UpdateWorkstationAccessDto } from './dto/update-workstation-access.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class WorkstationAccessService {

  constructor(private prisma:PrismaClient){}

  create(createWorkstationAccessDto: CreateWorkstationAccessDto) {
    return 'This action adds a new workstationAccess';
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
