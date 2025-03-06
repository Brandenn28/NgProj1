import { IsInt, IsString, IsEnum, Min, Max, IsNotEmpty } from 'class-validator';
import { WorkstationAvailability } from '@prisma/client';

export class CreateWorkstationDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    workstationId: string

    @IsInt()
    @Min(1)
    capacity: number;

    features

    @IsString()
    @IsNotEmpty()
    block: string;

    @IsString()
    @IsNotEmpty()
    level: string;

    @IsString()
    @IsNotEmpty()
    roomCode: string;

    @IsString()
    @IsNotEmpty()
    tags: string;

    @IsEnum(WorkstationAvailability) 
    availability: WorkstationAvailability;
    

}
