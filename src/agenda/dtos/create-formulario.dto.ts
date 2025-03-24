import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateFormDto {
  @IsString()
  @MaxLength(50)
  form_identificador: string;

  @IsOptional()
  @IsInt()
  form_frecuencia_cardiaca?: number;

  @IsOptional()
  @IsInt()
  form_presion_arterial?: number;

  @IsOptional()
  @IsInt()
  form_frecuencia_respiratoria?: number;

  @IsOptional()
  @IsInt()
  form_temperatura?: number;

  @IsOptional()
  @IsInt()
  form_saturacion_oxigeno?: number;

  @IsOptional()
  @IsString()
  form_diagnostico_presuntivo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  form_nombre_medicamento?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  form_presentacion_medicamento?: string;

  @IsOptional()
  @IsInt()
  form_cantidad_medicamento?: number;

  @IsOptional()
  @IsString()
  form_posologia_medicamento?: string;

  @IsOptional()
  @IsString()
  form_notas_adicionales?: string;

  @IsOptional()
  @IsBoolean()
  form_agendar_cita_manual?: boolean;

  @IsOptional()
  @IsBoolean()
  form_otra_conducta?: boolean;
}
