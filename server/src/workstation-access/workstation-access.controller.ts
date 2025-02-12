import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkstationAccessService } from './workstation-access.service';
import { CreateWorkstationAccessDto } from './dto/create-workstation-access.dto';
import { UpdateWorkstationAccessDto } from './dto/update-workstation-access.dto';

@Controller('workstation-access')
export class WorkstationAccessController {

  constructor(private readonly workstationAccessService: WorkstationAccessService) {}

  @Post()
  create(@Body() createWorkstationAccessDto: CreateWorkstationAccessDto) {
    return this.workstationAccessService.create(createWorkstationAccessDto);
  }

  @Get()
  findAll() {
    return this.workstationAccessService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workstationAccessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkstationAccessDto: UpdateWorkstationAccessDto) {
    return this.workstationAccessService.update(+id, updateWorkstationAccessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workstationAccessService.remove(+id);
  }
}
