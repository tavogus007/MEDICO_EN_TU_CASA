import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateMapaRutasDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del mapa (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  mapaEstado?: string;

  @ApiProperty({
    example: 4.711234,
    description: 'Coordenada de latitud',
    required: true,
  })
  @IsDecimal()
  mapaLatitud: number;

  @ApiProperty({
    example: -74.072234,
    description: 'Coordenada de longitud',
    required: true,
  })
  @IsDecimal()
  mapaLongitud: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la ruta relacionada',
    required: true,
  })
  @IsInt()
  rutaId: number;
}
