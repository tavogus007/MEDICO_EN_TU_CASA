import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateMacrodistritoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'El nombre no puede tener más de 20 caracteres' })
  macroNombre: string;

  @IsOptional()
  @IsIn(['A', 'I'], { message: 'El estado debe ser A (Activo) o I (Inactivo)' })
  macroEstado?: string;
}
