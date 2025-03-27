import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsInt } from 'class-validator';

export class CreateInfoDomicilioDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del registro (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  infoDomEstado?: string;

  @ApiProperty({
    example: 'Casa color azul, portón negro',
    description: 'Referencia del domicilio',
    required: false,
  })
  @IsOptional()
  @IsString()
  infoDomReferencia?: string;

  @ApiProperty({
    example: 1,
    description: 'ID de la ruta asociada',
    required: false,
  })
  @IsOptional()
  @IsInt()
  rutaId?: number;
}
