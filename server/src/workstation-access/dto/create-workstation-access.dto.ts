import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkstationAccessDto {
 @IsNotEmpty()
 @IsString()
 name
 rolesId
}
