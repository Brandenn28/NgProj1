import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';
import { UpdateWorkstationDto } from './dto/update-workstation.dto';
import { WorkstationAvailability } from '@prisma/client';

@Injectable()
export class WorkstationService {

  constructor(private prisma:PrismaService){}

  async createNewWorkstation(workstationData, imgUrls:string[]) {
    return this.prisma.workstation.create({
      data: { 
        workstationId:workstationData.workstationId,
        name: workstationData.name,
        capacity:workstationData.capacity,
        features: workstationData.feature,
        block:workstationData.block,
        level:workstationData.level,
        roomCode:workstationData.roomCode,
        access:workstationData.access,
        bookingPolicies:workstationData.bookingPolicies,
        availability:workstationData.availability,
        

      },
    });
  }

  getAvailabilityForDropdown(){
    return Object.values(WorkstationAvailability);
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
