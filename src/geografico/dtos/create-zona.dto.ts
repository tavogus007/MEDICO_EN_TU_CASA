import { IsInt, IsNotEmpty, IsOptional, IsIn, IsString } from 'class-validator';

export class CreateZonaDto {
  @IsNotEmpty()
  @IsString()
  zonaNombre: string;

  @IsOptional()
  @IsIn(['A', 'I'], { message: 'El estado debe ser A (Activo) o I (Inactivo)' })
  zonaEstado?: string;

  @IsNotEmpty()
  @IsInt()
  distId: number; // ID del Distrito relacionado
}
