import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mec_smartwatch', schema: 'medico_en_tu_casa_v2' })
export class Smartwatch {
  @PrimaryGeneratedColumn({ name: 'smart_id' })
  smartId: number;

  @CreateDateColumn({
    name: 'smart_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  smartRegistrado: Date;

  @UpdateDateColumn({
    name: 'smart_modificado',
    type: 'timestamp',
    nullable: true,
  })
  smartModificado: Date | null;

  @Column({
    name: 'smart_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  smartEstado: string;

  @Column({
    name: 'smart_frec_cardiaca',
    type: 'integer',
    nullable: true,
  })
  smartFrecCardiaca: number | null;

  @Column({
    name: 'smart_pres_sistolica',
    type: 'integer',
    nullable: true,
  })
  smartPresSistolica: number | null;

  @Column({
    name: 'smart_pres_diasistolica',
    type: 'integer',
    nullable: true,
  })
  smartPresDiasistolica: number | null;

  @Column({
    name: 'smart_pres_o2',
    type: 'integer',
    nullable: true,
  })
  smartPresO2: number | null;

  @Column({
    name: 'smart_temperatura',
    type: 'decimal',
    precision: 4,
    scale: 2,
    nullable: true,
  })
  smartTemperatura: number | null;

  @Column({
    name: 'smart_pasos',
    type: 'integer',
    nullable: true,
  })
  smartPasos: number | null;

  @Column({
    name: 'smart_calo_quem',
    type: 'integer',
    nullable: true,
  })
  smartCaloQuem: number | null;

  @Column({
    name: 'smart_sleep_horas',
    type: 'decimal',
    precision: 4,
    scale: 2,
    nullable: true,
  })
  smartSleepHoras: number | null;

  @Column({
    name: 'smart_nivel_estres',
    type: 'integer',
    nullable: true,
  })
  smartNivelEstres: number | null;

  @Column({
    name: 'smart_actividad_fisica',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  smartActividadFisica: string | null;
}
