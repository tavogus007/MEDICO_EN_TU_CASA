import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateAgendaDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado de la agenda (A=Activo, I=Inactivo)',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  ageEstado?: string;

  @ApiProperty({
    example: 'Histórico médico completo',
    description: 'Datos históricos del paciente',
    required: false,
  })
  @IsOptional()
  @IsString()
  ageHistorico?: string;

  @ApiProperty({
    example: 'Historia clínica detallada...',
    description: 'Historia clínica completa',
    required: false,
  })
  @IsOptional()
  @IsString()
  ageHistoriaClinica?: string;

  @ApiProperty({
    example: 'Diagnóstico principal: Hipertensión',
    description: 'Diagnóstico médico',
    required: false,
  })
  @IsOptional()
  @IsString()
  ageDiagnostico?: string;

  @ApiProperty({
    example: 'Control de presión arterial',
    description: 'Razón de la consulta',
    required: true,
  })
  @IsString()
  ageRazonConsulta: string;

  @ApiProperty({
    example: 'F-2023-001',
    description: 'Código de ficha',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  ageCodFicha?: string;

  @ApiProperty({
    example: 'Médico asignado: Dr. Pérez',
    description: 'Médico o área asignada',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  ageMA?: string;

  @ApiProperty({
    example: 1,
    description: 'ID de admisión relacionada',
    required: true,
  })
  @IsInt()
  admisionId: number;

  @ApiProperty({
    example: 2,
    description: 'ID de trabajo social relacionado',
    required: true,
  })
  @IsInt()
  tsId: number;
}
