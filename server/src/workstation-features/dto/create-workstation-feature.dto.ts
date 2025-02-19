import { IsNotEmpty, isNotEmpty, IsString } from "class-validator";

export class CreateWorkstationFeatureDto {
    @IsNotEmpty()
    @IsString()
    name:string;
}
