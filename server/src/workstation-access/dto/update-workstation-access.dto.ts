import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkstationAccessDto } from './create-workstation-access.dto';

export class UpdateWorkstationAccessDto extends PartialType(CreateWorkstationAccessDto) {}
