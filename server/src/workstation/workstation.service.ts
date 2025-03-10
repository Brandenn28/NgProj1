import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAccessDto, CreateFeaturesDto, CreateImagesDto, CreatePolicyDto, CreateWorkstationDto } from './dto/create-workstation.dto';
import { UpdateWorkstationDto } from './dto/update-workstation.dto';
import { WorkstationAvailability } from '@prisma/client';

@Injectable()
export class WorkstationService {

  constructor(private prisma:PrismaService){}



  async createNewWorkstation(
    wsdto:CreateWorkstationDto,
    // py:CreatePolicyDto,
    // ac:CreateAccessDto,
    // img:CreateImagesDto,
    // ft:CreateFeaturesDto
  ) {
     return this.prisma.$transaction(async (tx)=>{
      const workstation = await tx.workstation.create({
        data:{
          workstationId: wsdto.workstationId,
          name:wsdto.name,
          capacity:wsdto.capacity,
          block:wsdto.block,
          level:wsdto.level,
          roomCode:wsdto.roomCode,
          bookingPolicies: {
            connect:{
              policy:wsdto.policy.map((p)=>({p}))
            }
          },
          //connect id here means the id of the child table
          type:{
            connect:{
              id: wsdto.type
            },
          },
          availability:wsdto.availability,
        },
        // select:{id}
      });

      //Policy
      const policy = await tx.workstation_BookingPolicy.create({
        data:{

        }
      })
      // features, access, images, policy


    })
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
