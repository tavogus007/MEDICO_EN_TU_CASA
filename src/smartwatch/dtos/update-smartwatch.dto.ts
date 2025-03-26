import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateSmartwatchDto } from './create-smartwatch.dto';

export class UpdateSmartwatchDto extends PartialType(CreateSmartwatchDto) {
  @ApiProperty({
    example: 'A',
    description: 'Estado del dispositivo (A=Activo, I=Inactivo)',
    required: false,
  })
  smartEstado?: string;

  @ApiProperty({
    example: 72,
    description: 'Frecuencia cardíaca (latidos/minuto)',
    required: false,
  })
  smartFrecCardiaca?: number;

  @ApiProperty({
    example: 120,
    description: 'Presión sistólica (mmHg)',
    required: false,
  })
  smartPresSistolica?: number;

  @ApiProperty({
    example: 80,
    description: 'Presión diastólica (mmHg)',
    required: false,
  })
  smartPresDiasistolica?: number;

  @ApiProperty({
    example: 98,
    description: 'Nivel de oxígeno en sangre (%)',
    required: false,
  })
  smartPresO2?: number;

  @ApiProperty({
    example: 36.5,
    description: 'Temperatura corporal (°C)',
    required: false,
  })
  smartTemperatura?: number;

  @ApiProperty({
    example: 8500,
    description: 'Pasos diarios',
    required: false,
  })
  smartPasos?: number;

  @ApiProperty({
    example: 350,
    description: 'Calorías quemadas (kcal)',
    required: false,
  })
  smartCaloQuem?: number;

  @ApiProperty({
    example: 7.5,
    description: 'Horas de sueño',
    required: false,
  })
  smartSleepHoras?: number;

  @ApiProperty({
    example: 3,
    description: 'Nivel de estrés (1-10)',
    required: false,
  })
  smartNivelEstres?: number;

  @ApiProperty({
    example: 'Caminata rápida',
    description: 'Tipo de actividad física',
    required: false,
  })
  smartActividadFisica?: string;
}
