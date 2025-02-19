import { Injectable } from '@nestjs/common';
import { CreateWorkstationFeatureDto } from './dto/create-workstation-feature.dto';
import { UpdateWorkstationFeatureDto } from './dto/update-workstation-feature.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkstationFeaturesService {
  
  constructor(private prisma:PrismaService){}

  async setItemDropdown(item:string){
    return this.prisma.workstationFeatures.create({
      data:{
        name:item
      },
    });
  }

  create(createWorkstationFeatureDto: CreateWorkstationFeatureDto) {
    return 'This action adds a new workstationFeature';
  }

  findAll() {
    return this.prisma.workstationFeatures.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} workstationFeature`;
  }

  update(id: number, updateWorkstationFeatureDto: UpdateWorkstationFeatureDto) {
    return `This action updates a #${id} workstationFeature`;
  }

  remove(id: number) {
    return `This action removes a #${id} workstationFeature`;
  }
}
