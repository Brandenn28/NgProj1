import { Injectable } from '@nestjs/common';
import { CreateWorkstationPolicyDto } from './dto/create-workstation-policy.dto';
import { UpdateWorkstationPolicyDto } from './dto/update-workstation-policy.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class WorkstationPolicyService {

  constructor(private prisma:PrismaClient){}

  create(createWorkstationPolicyDto: CreateWorkstationPolicyDto) {
    return 'This action adds a new workstationPolicy';
  }

  findAll() {
    return this.prisma.bookingPolicy.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} workstationPolicy`;
  }

  update(id: number, updateWorkstationPolicyDto: UpdateWorkstationPolicyDto) {
    return `This action updates a #${id} workstationPolicy`;
  }

  remove(id: number) {
    return `This action removes a #${id} workstationPolicy`;
  }
}
