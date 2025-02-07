import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkstationFeatureDto } from './create-workstation-feature.dto';

export class UpdateWorkstationFeatureDto extends PartialType(CreateWorkstationFeatureDto) {}
