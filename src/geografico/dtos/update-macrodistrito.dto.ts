import { PartialType } from '@nestjs/mapped-types';
import { CreateMacrodistritoDto } from './create-macrodistrito.dto';
import { IsString, MaxLength, IsIn, IsOptional } from 'class-validator';

export class UpdateMacrodistritoDto extends PartialType(
  CreateMacrodistritoDto,
) {
  @IsOptional()
  @IsString()
  @MaxLength(20, { message: 'El nombre no puede tener más de 20 caracteres' })
  macroNombre?: string;

  @IsOptional()
  @IsIn(['A', 'I'], { message: 'El estado debe ser A (Activo) o I (Inactivo)' })
  macroEstado?: string;
}
