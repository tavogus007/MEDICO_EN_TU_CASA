import { PartialType } from '@nestjs/mapped-types';
import { CreateZonaDto } from './create-zona.dto';
import { IsOptional, IsIn, IsString } from 'class-validator';

export class UpdateZonaDto extends PartialType(CreateZonaDto) {
  @IsOptional()
  @IsString()
  zona_nombre: string;

  @IsOptional()
  @IsIn(['A', 'I'], { message: 'El estado debe ser A (Activo) o I (Inactivo)' })
  zonaEstado?: string;
}
