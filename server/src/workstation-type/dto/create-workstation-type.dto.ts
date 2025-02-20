import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkstationTypeDto {
    @IsNotEmpty()
    @IsString()
    name:string
}   

