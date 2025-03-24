import { ApiProperty } from '@nestjs/swagger';

export class UpdateAgendaDto {
  @ApiProperty({
    description: 'El historico del paciente',
    example: 'Histórico actualizado',
    required: false,
  })
  age_historico?: string;

  @ApiProperty({
    description: 'La historia clínica del paciente',
    example: 'Historia clínica actualizada',
    required: false,
  })
  age_historia_clinica?: string;

  @ApiProperty({
    description: 'Indica si hay un diagnóstico',
    example: false,
    required: false,
  })
  age_diagnostico?: boolean;

  @ApiProperty({
    description: 'Nombre del paciente',
    example: 'Juan Pérez Actualizado',
    required: false,
  })
  age_paciente?: string;

  @ApiProperty({
    description: 'Razón de la consulta',
    example: 'Dolor de espalda',
    required: false,
  })
  age_razon_consulta?: string;

  @ApiProperty({
    description: 'Número de celular de referencia',
    example: 987654321,
    required: false,
  })
  age_celular_referencia?: number;

  @ApiProperty({
    description: 'Información del domicilio',
    example: 'Avenida Siempre Viva 456',
    required: false,
  })
  age_info_domicilio?: string;

  @ApiProperty({
    description: 'Código de la ficha',
    example: 'FICHA456',
    required: false,
  })
  age_cod_ficha?: string;

  @ApiProperty({
    description: 'Indica si es mañana o tarde',
    example: false,
    required: false,
  })
  age_m_a?: boolean;

  @ApiProperty({ description: 'Clave foranea hacia admisiones', example: 123 })
  age_admision_id: number;
}
