import { Injectable } from '@nestjs/common';
import { CreateWorkstationTypeDto } from './dto/create-workstation-type.dto';
import { UpdateWorkstationTypeDto } from './dto/update-workstation-type.dto';

@Injectable()
export class WorkstationTypeService {
  create(createWorkstationTypeDto: CreateWorkstationTypeDto) {
    return 'This action adds a new workstationType';
  }

  findAll() {
    return `This action returns all workstationType`;
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
