import { ApiProperty } from '@nestjs/swagger';

export class CreateAgendaDto {
  @ApiProperty({
    description: 'El historico del paciente',
    example: 'Histórico de ejemplo',
  })
  age_historico: string;

  @ApiProperty({
    description: 'La historia clínica del paciente',
    example: 'Historia clínica de ejemplo',
  })
  age_historia_clinica: string;

  @ApiProperty({ description: 'Indica si hay un diagnóstico', example: true })
  age_diagnostico: boolean;

  @ApiProperty({ description: 'Nombre del paciente', example: 'Juan Pérez' })
  age_paciente: string;

  @ApiProperty({
    description: 'Razón de la consulta',
    example: 'Dolor de cabeza',
  })
  age_razon_consulta: string;

  @ApiProperty({
    description: 'Número de celular de referencia',
    example: 123456789,
  })
  age_celular_referencia: number;

  @ApiProperty({
    description: 'Información del domicilio',
    example: 'Calle Falsa 123',
  })
  age_info_domicilio: string;

  @ApiProperty({ description: 'Código de la ficha', example: 'FICHA123' })
  age_cod_ficha: string;

  @ApiProperty({ description: 'Indica si es mañana o tarde', example: false })
  age_m_a: boolean;
}
