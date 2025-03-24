import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Admisiones } from '../../adm_ts/entities/admisiones.entity';
import { TrabajoSocial } from '../../adm_ts/entities/trabajoSoclal.entity';

@Entity({ name: 'mec_agenda', schema: 'medico_en_tu_casa' })
export class Agenda {
  @PrimaryGeneratedColumn()
  age_id: number;

  @ApiProperty({ description: 'El historico del paciente' })
  @Column({ type: 'varchar', length: 50 })
  age_historico: string;

  @ApiProperty({ description: 'Historia clinica del paciente' })
  @Column({ type: 'varchar', length: 50 })
  age_historia_clinica: string;

  @ApiProperty({ description: 'Tiene diagnostico' })
  @Column({ type: 'boolean' })
  age_diagnostico: boolean;

  @ApiProperty({ description: 'Identificador paciente' })
  @Column({ type: 'varchar', length: 50 })
  age_paciente: string;

  @ApiProperty({ description: 'Razon de la consulta' })
  @Column({ type: 'varchar', length: 100 })
  age_razon_consulta: string;

  @ApiProperty({ description: 'Celular de referencia' })
  @Column({ type: 'integer' })
  age_celular_referencia: number;

  @ApiProperty({ description: 'Informacion del domicilio' })
  @Column({ type: 'varchar', length: 100 })
  age_info_domicilio: string;

  @ApiProperty({ description: 'codigo de ficha' })
  @Column({ type: 'varchar', length: 15 })
  age_cod_ficha: string;

  @ApiProperty({ description: 'Requiere monitoreo avanzado' })
  @Column({ type: 'boolean' })
  age_m_a: boolean;

  @ApiProperty({ description: 'Clave foranea a admision' })
  @Column({ type: 'integer', nullable: true })
  age_admision_id: number | null;

  @ApiProperty({ description: 'Clave foranea a trabajo social' })
  @Column({ type: 'integer', nullable: true })
  age_ts_id: number | null;

  @ManyToOne(() => Admisiones, (admision) => admision.agendas)
  @JoinColumn({
    name: 'age_admision_id',
    referencedColumnName: 'admision_id',
  })
  admision?: Admisiones;

  @ManyToOne(() => TrabajoSocial, (trabSoc) => trabSoc.agendas)
  @JoinColumn({
    name: 'age_ts_id',
    referencedColumnName: 'ts_id',
  })
  trabSoc?: TrabajoSocial;
}
