import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkstationPolicyDto } from './create-workstation-policy.dto';

export class UpdateWorkstationPolicyDto extends PartialType(CreateWorkstationPolicyDto) {}
