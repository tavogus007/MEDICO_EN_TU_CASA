import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from 'class-validator';

@Entity('mec_form_diagnostico', { schema: 'medico_en_tu_casa' })
export class FormDiagnostico {
  @PrimaryGeneratedColumn('increment')
  form_id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  form_identificador: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  form_fecha_registro: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  form_fecha_modificacion: Date;

  @Column({ type: 'char', length: 1, default: 'A', nullable: false })
  form_estado: string;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  @IsInt()
  form_frecuencia_cardiaca?: number;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  @IsInt()
  form_presion_arterial?: number;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  @IsInt()
  form_frecuencia_respiratoria?: number;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  @IsInt()
  form_temperatura?: number;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  @IsInt()
  form_saturacion_oxigeno?: number;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  @IsString()
  form_diagnostico_presuntivo?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  form_nombre_medicamento?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  form_presentacion_medicamento?: string;

  @Column({ type: 'int', nullable: true })
  @IsOptional()
  @IsInt()
  form_cantidad_medicamento?: number;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  @IsString()
  form_posologia_medicamento?: string;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  @IsString()
  form_notas_adicionales?: string;

  @Column({ type: 'boolean', nullable: true })
  @IsOptional()
  @IsBoolean()
  form_agendar_cita_manual?: boolean;

  @Column({ type: 'boolean', nullable: true })
  @IsOptional()
  @IsBoolean()
  form_otra_conducta?: boolean;
}
