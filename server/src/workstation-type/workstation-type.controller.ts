import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkstationTypeService } from './workstation-type.service';
import { CreateWorkstationTypeDto } from './dto/create-workstation-type.dto';
import { UpdateWorkstationTypeDto } from './dto/update-workstation-type.dto';

@Controller('workstation-type')
export class WorkstationTypeController {
  constructor(private readonly workstationTypeService: WorkstationTypeService) {}

  @Post()
  create(@Body() createWorkstationTypeDto: CreateWorkstationTypeDto) {
    return this.workstationTypeService.create(createWorkstationTypeDto);
  }

  @Get()
  findAll() {
    return this.workstationTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workstationTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkstationTypeDto: UpdateWorkstationTypeDto) {
    return this.workstationTypeService.update(+id, updateWorkstationTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workstationTypeService.remove(+id);
  }
}
