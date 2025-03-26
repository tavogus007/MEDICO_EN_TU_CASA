import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Distrito } from '../entities/distrito.entity';

@Entity('mec_zona', { schema: 'medico_en_tu_casa_v2' })
export class Zona {
  @PrimaryGeneratedColumn({ name: 'zona_id' })
  zona_id: number;

  @ApiProperty({ description: 'Nombre de la zona' })
  @Column({
    name: 'zona_nombre',
    type: 'varchar',
    length: 100,
  })
  zonaNombre: string;

  @CreateDateColumn({
    name: 'zona_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  zonaRegistrado: Date;

  @ApiProperty({ description: 'Fecha de modificación' })
  @UpdateDateColumn({
    name: 'zona_modificado',
    type: 'timestamp',
    nullable: true,
  })
  zonaModificado: Date | null;

  @ApiProperty({ description: 'Estado' })
  @Column({
    name: 'zona_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  zonaEstado: string;

  // Relación Many-to-One con Distrito
  @ManyToOne(() => Distrito, (distrito) => distrito.zonas)
  @JoinColumn({ name: 'dist_id' })
  @ApiProperty({ type: () => Distrito })
  distrito: Distrito;
}
