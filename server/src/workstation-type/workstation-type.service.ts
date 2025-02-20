import { Injectable } from '@nestjs/common';
import { CreateWorkstationTypeDto } from './dto/create-workstation-type.dto';
import { UpdateWorkstationTypeDto } from './dto/update-workstation-type.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class WorkstationTypeService {

  constructor(private prisma:PrismaClient){}

  create(createWorkstationTypeDto: CreateWorkstationTypeDto) {
    return 'This action adds a new workstationType';
  }

  async setNewTypeDD(value:string){
    return this.prisma.workstationFeatures.create({
      data:{
        name:value
      },
    });
  }

  findAll() {
    return this.prisma.workstationType.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} workstationType`;
  }

  update(id: number, updateWorkstationTypeDto: UpdateWorkstationTypeDto) {
    return `This action updates a #${id} workstationType`;
  }

  remove(id: number) {
    return `This action removes a #${id} workstationType`;
  }
}
