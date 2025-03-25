import { IsString, IsNotEmpty, Length, IsIn } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  persCi: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  persPaterno: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  persMaterno: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  persNombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 1)
  @IsIn(['M', 'F'])
  persSexo: string;
}
