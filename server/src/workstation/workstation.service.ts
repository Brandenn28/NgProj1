import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';
import { UpdateWorkstationDto } from './dto/update-workstation.dto';
import { WorkstationAvailability } from '@prisma/client';

@Injectable()
export class WorkstationService {

  constructor(private prisma:PrismaService){}

  async createNewWorkstation(dto:CreateWorkstationDto) {
     return this.prisma.$transaction(async (tx)=>{

      const workstation = await tx.workstation.create({
        data:{
          workstationId: dto.workstationId,
          name:dto.name,
          capacity:dto.capacity,
          block:dto.block,
          level:dto.level,
          roomCode:dto.roomCode,
          type:{
            connect:{
              id: dto.type
            },
          },
          availability:dto.availability,
        },
      });

      //Policy
      const policy = await tx.workstation_BookingPolicy.createMany({
        data:dto.policies.map((p)=>({
          workstationID:workstation.name,
          policyId:p.label,
        })),
      });


      //Features
      const features = await tx.workstation_WorkstationFeatures.createMany({
        data: dto.features.map((p)=>({
          workstationId: workstation.id,
          featureID:p.value,
        })),
      });

      //access roles
      const access = await tx.workstation_AccessRole.createMany({
        data: dto.access.map((p)=>({
          workstationId:workstation.id,
          accessRoleId: access.name
        })),
      });

      // Images
      const images = await tx.workstation_Image.createMany({
        data:dto.images.map((p)=>({
          workstationId:workstation.name,
          url:p
        })),
      });
      // features, access, images, policy


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
