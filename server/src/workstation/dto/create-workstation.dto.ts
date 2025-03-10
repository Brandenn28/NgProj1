import { IsInt, IsString, IsEnum, Min, Max, IsNotEmpty, isNotEmpty, IsArray, IsNumber } from 'class-validator';
import { WorkstationAvailability } from '@prisma/client';


export class CreatePolicyDto{

}

export class CreateAccessDto{

}

export class CreateImagesDto{

}

export class CreateFeaturesDto{
    
}


// Create does not include the fields with relations except the enum(availability)
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

    // @IsNotEmpty()
    // @IsArray()
    // features: {name:string, value:number}[];

    @IsString()
    @IsNotEmpty()
    block: string;

    @IsString()
    @IsNotEmpty()
    level: string;

    @IsString()
    @IsNotEmpty()
    roomCode: string;

    @IsNumber()
    @IsNotEmpty()
    type: number;

    // @IsArray()
    // @IsNotEmpty()
    // access: {name:string, label: string}[];

    @IsArray()
    @IsNotEmpty()
    policy:{name:string, label:string}[];

    @IsEnum(WorkstationAvailability) 
    availability: WorkstationAvailability;

    // @IsArray()
    // @IsNotEmpty()
    // images:string;
    

}
