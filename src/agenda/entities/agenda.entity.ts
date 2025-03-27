import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  // OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// import { Admisiones } from '../../adm_ts/entities/admisiones.entity';
// import { TrabajoSocial } from '../../adm_ts/entities/trabajoSoclal.entity';
import { SiisWeb } from '../../sistema/entities/siis.entity';

@Entity({ name: 'mec_agenda', schema: 'medico_en_tu_casa_v2' })
export class Agenda {
  @PrimaryGeneratedColumn({ name: 'age_id' })
  age_id: number;

  @CreateDateColumn({
    name: 'age_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  ageRegistrado: Date;

  @UpdateDateColumn({
    name: 'age_modificado',
    type: 'timestamp',
    nullable: true,
  })
  ageModificado: Date | null;

  @ApiProperty({ description: 'Estado de la agenda' })
  @Column({
    name: 'age_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  ageEstado: string;

  @Column({
    name: 'age_historico',
    type: 'text',
    nullable: true,
  })
  ageHistorico: string | null;

  @Column({
    name: 'age_historia_clinica',
    type: 'text',
    nullable: true,
  })
  ageHistoriaClinica: string | null;

  @Column({
    name: 'age_diagnostico',
    type: 'text',
    nullable: true,
  })
  ageDiagnostico: string | null;

  @Column({
    name: 'age_razon_consulta',
    type: 'text',
    nullable: true,
  })
  ageRazonConsulta: string | null;

  @Column({
    name: 'age_cod_ficha',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  ageCodFicha: string | null;

  @Column({
    name: 'age_m_a',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  ageMA: string | null;

  // // Relación ManyToOne con Admision
  // @ManyToOne(() => Admisiones)
  // @JoinColumn({ name: 'admision_id' })
  // admision: Admisiones;

  // Relación ManyToOne con TrabajoSocial
  // @ManyToOne(() => TrabajoSocial)
  // @JoinColumn({ name: 'ts_id' })
  // trabSoc: TrabajoSocial;

  // Relación 1:1 inversa con SiisWeb (opcional)
  @OneToOne(() => SiisWeb, (siisWeb) => siisWeb.agenda)
  siisWeb: SiisWeb;
}
