import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Agenda } from '../../agenda/entities/agenda.entity';

@Entity({ name: 'mec_trabajo_social', schema: 'medico_en_tu_casa' })
export class TrabajoSocial {
  @PrimaryGeneratedColumn({ name: 'ts_id' })
  ts_id: number;

  @ApiProperty({ description: 'Identificador del trabajo social' })
  @Column({ name: 'ts_identificador' })
  ts_identificador: string;

  @ApiProperty({ description: 'Fecha de registro del trabajo social' })
  @Column({ name: 'ts_registrado', type: 'timestamp', nullable: true })
  ts_registrado: Date;

  @ApiProperty({ description: 'Fecha de modificación del trabajo social' })
  @Column({ name: 'ts_modificacion', type: 'timestamp', nullable: true })
  ts_modificacion: Date;

  @ApiProperty({ description: 'Estado del trabajo social' })
  @Column({ name: 'ts_estado', type: 'char', length: 1, default: 'A' })
  ts_estado: string;

  @ApiProperty({ description: 'ID del usuario que registró el trabajo social' })
  @Column({ name: 'ts_usuario_id' })
  ts_usuario_id: number;

  @ApiProperty({ description: 'ID del hospital asociado al trabajo social' })
  @Column({ name: 'ts_hsp_id' })
  ts_hsp_id: number;

  @OneToMany(() => Agenda, (agenda) => agenda.trabSoc)
  agendas?: Agenda[];
}
