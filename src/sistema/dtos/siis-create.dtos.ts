import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsInt, IsString, Length } from 'class-validator';

export class CreateSiisWebDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del registro (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  siisWebEstado?: string;

  @ApiProperty({
    example: 1,
    description: 'ID de la agenda relacionada (1:1)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  ageId?: number;

  @ApiProperty({
    example: 1,
    description: 'ID de la ruta relacionada (1:1)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  rutaId?: number;

  @ApiProperty({
    example: 1,
    description: 'ID del historial relacionado (1:1)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  histoId?: number;
}
