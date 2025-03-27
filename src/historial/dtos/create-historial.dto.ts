import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class CreateHistorialDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del historial (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  histoEstado?: string;

  @ApiProperty({
    example: 'Control médico rutinario',
    description: 'Descripción del registro',
    required: true,
  })
  @IsString()
  histoDescripcion: string;

  @ApiProperty({
    example: 1,
    description: 'ID del usuario relacionado',
    required: true,
  })
  @IsInt()
  histoUsuarioId: number;
}
