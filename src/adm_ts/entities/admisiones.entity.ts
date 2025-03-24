import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Agenda } from '../../agenda/entities/agenda.entity';

@Entity({ name: 'mec_admision', schema: 'medico_en_tu_casa' })
export class Admisiones {
  @PrimaryGeneratedColumn({ name: 'admision_id' })
  admision_id: number;

  @ApiProperty({ description: 'Fecha en que se hizo la admisión' })
  @Column({ name: 'admision_fecha', type: 'date' })
  admision_fecha: Date;

  @ApiProperty({ description: 'Identificador' })
  @Column({ name: 'admision_contador' })
  admision_contador: number;

  @ApiProperty({ description: 'Fecha de registro de la admisión' })
  @Column({ name: 'admision_registrado', type: 'timestamp', nullable: true })
  admision_registrado: Date;

  @ApiProperty({ description: 'Fecha de modificación de la admisión' })
  @Column({ name: 'admision_modificado', type: 'timestamp', nullable: true })
  admision_modificado: Date;

  @ApiProperty({ description: 'ID del usuario que registró la admisión' })
  @Column({ name: 'admision_usuario_id' })
  admision_usuario_id: number;

  @ApiProperty({ description: 'Estado de la admisión' })
  @Column({ name: 'admision_estado', type: 'char', length: 1, default: 'A' })
  admision_estado: string;

  @ApiProperty({ description: 'ID del hospital asociado a la admisión' })
  @Column({ name: 'admision_hsp_id' })
  admisionhHsp_id: number;

  @OneToMany(() => Agenda, (agenda) => agenda.admision)
  agendas?: Agenda[];
}
