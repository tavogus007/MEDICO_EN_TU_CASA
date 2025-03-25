import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Distrito } from './distrito.entity';

@Entity('mec_macrodistrito', { schema: 'medico_en_tu_casa_v2' })
export class Macrodistrito {
  @PrimaryGeneratedColumn({ name: 'macro_id' })
  macro_id: number;

  @ApiProperty({ description: 'Nommbre del macrodistrito' })
  @Column({
    name: 'macro_nombre',
    type: 'varchar',
    length: 20,
    nullable: false,
    unique: true
  })
  macroNombre: string;

  @CreateDateColumn({
    name: 'macro_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  macroRegistrado: Date;

  @ApiProperty({ description: 'Fecha de modificación' })
  @UpdateDateColumn({
    name: 'macro_modificado',
    type: 'timestamp',
    nullable: true
  })
  macroModificado: Date | null;

  @ApiProperty({ description: 'Estado' })
  @Column({
    name: 'macro_estado',
    type: 'char',
    length: 1,
    default: 'A'
  })
  macroEstado: string;

  @OneToMany(() => Distrito, (distrito) => distrito.macrodistrito)
    distritos?: Distrito[];
}
