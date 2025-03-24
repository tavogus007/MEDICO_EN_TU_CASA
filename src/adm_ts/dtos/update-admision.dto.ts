import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString, IsOptional } from 'class-validator';

export class UpdateAdmisionDto {
  @ApiProperty({
    description: 'Fecha en que se hizo la admisión',
    example: '2023-10-01',
    required: false,
  })
  @IsOptional()
  @IsDate()
  admision_fecha?: Date;

  @ApiProperty({ description: 'Identificador', example: 123, required: false })
  @IsOptional()
  @IsInt()
  admision_contador?: number;

  @ApiProperty({
    description: 'Fecha de registro de la admisión',
    example: '2023-10-01T12:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDate()
  admision_registrado?: Date;

  @ApiProperty({
    description: 'Fecha de modificación de la admisión',
    example: '2023-10-01T12:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDate()
  admision_modificado?: Date;

  @ApiProperty({
    description: 'ID del usuario que registró la admisión',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  admision_usuarioId?: number;

  @ApiProperty({
    description: 'Estado de la admisión',
    example: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  admision_estado?: string;

  @ApiProperty({
    description: 'ID del hospital asociado a la admisión',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  admisionhHsp_id?: number;
}
