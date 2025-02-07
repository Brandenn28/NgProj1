import { Injectable } from '@nestjs/common';
import { CreateWorkstationFeatureDto } from './dto/create-workstation-feature.dto';
import { UpdateWorkstationFeatureDto } from './dto/update-workstation-feature.dto';

@Injectable()
export class WorkstationFeaturesService {
  create(createWorkstationFeatureDto: CreateWorkstationFeatureDto) {
    return 'This action adds a new workstationFeature';
  }

  findAll() {
    return `This action returns all workstationFeatures`;
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
