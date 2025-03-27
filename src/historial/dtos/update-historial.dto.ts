import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateHistorialDto {
  @ApiProperty({
    description: 'Descripción del historial',
    required: false,
  })
  @IsOptional()
  @IsString()
  histoDescripcion?: string;

  @ApiProperty({
    description: 'Estado del registro (A: Activo, I: Inactivo)',
    required: false,
    maxLength: 1,
  })
  @IsOptional()
  @IsString()
  histoEstado?: string;

  @ApiProperty({
    description: 'ID del usuario relacionado',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  histoUsuarioId?: number;
}
