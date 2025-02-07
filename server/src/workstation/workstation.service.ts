import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';
import { UpdateWorkstationDto } from './dto/update-workstation.dto';

@Injectable()
export class WorkstationService {

  constructor(private prisma:PrismaService){}

async create(createWorkstationDto: CreateWorkstationDto) {
  return this.prisma.workstation.create({
    data: {
      name: createWorkstationDto.name,
      workstationId: createWorkstationDto.workstationId,
      capacity: createWorkstationDto.capacity,
      block: createWorkstationDto.block,
      level: createWorkstationDto.level,
      roomCode: createWorkstationDto.roomCode,
      availability: createWorkstationDto.availability,
      type: { connect: { id: createWorkstationDto.typeID } },
    },
  });
}


  findAll() {
    return `This action returns all workstation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workstation`;
  }

  update(id: number, updateWorkstationDto: UpdateWorkstationDto) {
    return `This action updates a #${id} workstation`;
  }

  remove(id: number) {
    return `This action removes a #${id} workstation`;
  }
}
