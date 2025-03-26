import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';
import { IsString, IsOptional, Length, IsIn } from 'class-validator';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
  @IsString()
  @IsOptional()
  @Length(1, 20)
  persCi?: string;

  @IsString()
  @IsOptional()
  @Length(1, 100)
  persPaterno?: string;

  @IsString()
  @IsOptional()
  @Length(1, 100)
  persMaterno?: string;

  @IsString()
  @IsOptional()
  @Length(1, 100)
  persNombre?: string;

  @IsString()
  @IsOptional()
  @Length(1, 1)
  @IsIn(['M', 'F'])
  persSexo?: string;

  @IsString()
  @IsOptional()
  @Length(1, 1)
  @IsIn(['A', 'I'])
  persEstado?: string;
}
