import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkstationService } from './workstation.service';
import { CreateWorkstationDto } from './dto/create-workstation.dto';
import { UpdateWorkstationDto } from './dto/update-workstation.dto';
import { WorkstationAvailability } from '@prisma/client';

@Controller('workstation')
export class WorkstationController {
  constructor(private readonly workstationService: WorkstationService) {}

  @Post()
  create(@Body() createWorkstationDto: CreateWorkstationDto) {
    return this.workstationService.create(createWorkstationDto);
  }

  @Get()
  findAll() {
    return this.workstationService.findAll();
  }
  @Get('enum-availability')
  getAvailabilityEnum(){
    return this.workstationService.getAvailabilityForDropdown();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workstationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkstationDto: UpdateWorkstationDto) {
    return this.workstationService.update(+id, updateWorkstationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workstationService.remove(+id);
  }
}
