import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkstationTypeDto } from './create-workstation-type.dto';

export class UpdateWorkstationTypeDto extends PartialType(CreateWorkstationTypeDto) {}
