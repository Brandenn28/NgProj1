import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkstationPolicyService } from './workstation-policy.service';
import { CreateWorkstationPolicyDto } from './dto/create-workstation-policy.dto';
import { UpdateWorkstationPolicyDto } from './dto/update-workstation-policy.dto';

@Controller('workstation-policy')
export class WorkstationPolicyController {
  constructor(private readonly workstationPolicyService: WorkstationPolicyService) {}

  @Post()
  create(@Body() createWorkstationPolicyDto: CreateWorkstationPolicyDto) {
    return this.workstationPolicyService.create(createWorkstationPolicyDto);
  }

  @Get()
  getPolicyForDropdown() {
    return this.workstationPolicyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workstationPolicyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkstationPolicyDto: UpdateWorkstationPolicyDto) {
    return this.workstationPolicyService.update(+id, updateWorkstationPolicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workstationPolicyService.remove(+id);
  }
}
