import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class CreateConstruccionRutaDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado de construcción (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  constRutaEstado?: string;

  @ApiProperty({
    example: 'Construcción de ruta prioritaria',
    description: 'Descripción del proceso',
    required: false,
  })
  @IsOptional()
  @IsString()
  constRutaDescripcion?: string;

  @ApiProperty({
    example: 1,
    description: 'ID de la ruta relacionada',
    required: true,
  })
  @IsInt()
  rutaId: number;
}
