import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateMapaDeRutasDto {
  @ApiProperty({
    description: 'Latitud de la ubicación',
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  mapaLatitud?: number;

  @ApiProperty({
    description: 'Longitud de la ubicación',
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  mapaLongitud?: number;

  @ApiProperty({
    description: 'Estado del registro (A: Activo, I: Inactivo)',
    required: false,
    maxLength: 1,
  })
  @IsOptional()
  @IsString()
  mapaEstado?: string;

  @ApiProperty({
    description: 'ID de la ruta relacionada',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  rutaId?: number;
}
