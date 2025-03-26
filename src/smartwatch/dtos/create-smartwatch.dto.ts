import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, IsInt, IsNumber } from 'class-validator';

export class CreateSmartwatchDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del dispositivo (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  smartEstado?: string;

  @ApiProperty({
    example: 72,
    description: 'Frecuencia cardíaca (latidos/minuto)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartFrecCardiaca?: number;

  @ApiProperty({
    example: 120,
    description: 'Presión sistólica (mmHg)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartPresSistolica?: number;

  @ApiProperty({
    example: 80,
    description: 'Presión diastólica (mmHg)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartPresDiasistolica?: number;

  @ApiProperty({
    example: 98,
    description: 'Nivel de oxígeno en sangre (%)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartPresO2?: number;

  @ApiProperty({
    example: 36.5,
    description: 'Temperatura corporal (°C)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  smartTemperatura?: number;

  @ApiProperty({
    example: 8500,
    description: 'Pasos diarios',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartPasos?: number;

  @ApiProperty({
    example: 350,
    description: 'Calorías quemadas (kcal)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartCaloQuem?: number;

  @ApiProperty({
    example: 7.5,
    description: 'Horas de sueño',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  smartSleepHoras?: number;

  @ApiProperty({
    example: 3,
    description: 'Nivel de estrés (1-10)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  smartNivelEstres?: number;

  @ApiProperty({
    example: 'Caminata rápida',
    description: 'Tipo de actividad física',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  smartActividadFisica?: string;
}
