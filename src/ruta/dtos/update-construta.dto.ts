import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateConstruccionRutaDto {
  @ApiProperty({
    description: 'Descripción de la construcción de ruta',
    required: false,
  })
  @IsOptional()
  @IsString()
  constRutaDescripcion?: string;

  @ApiProperty({
    description: 'Estado del registro (A: Activo, I: Inactivo)',
    required: false,
    maxLength: 1,
  })
  @IsOptional()
  @IsString()
  constRutaEstado?: string;

  @ApiProperty({
    description: 'ID de la ruta relacionada',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  rutaId?: number;
}
