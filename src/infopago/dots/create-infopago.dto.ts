import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsNumber, IsInt } from 'class-validator';

export class CreateInformacionPagoDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del pago (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  infoPagoEstado?: string;

  @ApiProperty({
    example: 150.75,
    description: 'Monto del pago',
    required: true,
  })
  @IsNumber()
  infoPagoMonto: number;

  @ApiProperty({
    example: 'Pago por consulta médica',
    description: 'Descripción del pago',
    required: false,
  })
  @IsOptional()
  @IsString()
  infoPagoDescripcion?: string;

  @ApiProperty({
    example: 1,
    description: 'ID de la referencia a Mec_igob',
    required: true,
  })
  @IsInt()
  igobId: number;
}
