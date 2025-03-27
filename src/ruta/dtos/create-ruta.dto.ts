import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, Length } from 'class-validator';

export class CreateRutaDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado de la ruta (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  rutaEstado?: string;

  @ApiProperty({
    example: 'Hospital Central',
    description: 'Punto de origen de la ruta',
    required: true,
  })
  @IsString()
  rutaOrigen: string;

  @ApiProperty({
    example: 'Calle 123 #45-67',
    description: 'Punto de destino de la ruta',
    required: true,
  })
  @IsString()
  rutaDestino: string;

  @ApiProperty({
    example: null,
    description: 'Duración aproximada en minutos',
    required: false,
  })
  @IsOptional()
  @IsInt()
  rutaDuracionAprox?: number;
}
