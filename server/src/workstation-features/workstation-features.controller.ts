import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkstationFeaturesService } from './workstation-features.service';
import { CreateWorkstationFeatureDto } from './dto/create-workstation-feature.dto';
import { UpdateWorkstationFeatureDto } from './dto/update-workstation-feature.dto';

@Controller('workstation-features')
export class WorkstationFeaturesController {
  constructor(private readonly workstationFeaturesService: WorkstationFeaturesService) {}

  @Post()
  create(@Body() createWorkstationFeatureDto: CreateWorkstationFeatureDto) {
    return this.workstationFeaturesService.create(createWorkstationFeatureDto);
  }

  @Get()
  async findAll() {
    return this.workstationFeaturesService.findAll();
    // return console.log("this endpoint is working");
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workstationFeaturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkstationFeatureDto: UpdateWorkstationFeatureDto) {
    return this.workstationFeaturesService.update(+id, updateWorkstationFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workstationFeaturesService.remove(+id);
  }
}
