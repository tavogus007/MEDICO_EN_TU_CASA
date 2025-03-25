import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Macrodistrito } from './macrodistrito.entity';
import { Zona } from './zona.entity';

@Entity('mec_distrito', { schema: 'medico_en_tu_casa_v2' })
export class Distrito {
  @PrimaryGeneratedColumn({ name: 'dist_id' })
  dist_id: number;

  @ApiProperty({ description: 'Numero del distrito' })
  @Column({
    name: 'dist_nro',
    type: 'int',
  })
  distNro: number;

  @CreateDateColumn({
    name: 'dist_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  distRegistrado: Date;

  @ApiProperty({ description: 'Fecha de modificación' })
  @UpdateDateColumn({
    name: 'dist_modificado',
    type: 'timestamp',
    nullable: true,
  })
  distModificado: Date | null;

  @ApiProperty({ description: 'Estado' })
  @Column({
    name: 'dist_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  distEstado: string;

  // Relación Many-to-One con Macrodistrito
  @ManyToOne(() => Macrodistrito, (macrodistrito) => macrodistrito.distritos)
  @JoinColumn({ name: 'macro_id' })
  @ApiProperty({ type: () => Macrodistrito })
  macrodistrito: Macrodistrito;

  // Relación One-to-Many con Zona
  @ApiProperty({ type: () => Zona })
  @OneToMany(() => Zona, (zona) => zona.distrito)
  zonas: Zona[];
}
