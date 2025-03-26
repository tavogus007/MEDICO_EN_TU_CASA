import { ApiProperty } from '@nestjs/swagger';
import { Ruta } from 'src/ruta/entities/ruta.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('mec_siis_web', { schema: 'medico_en_tu_casa_v2' })
export class SiisWeb {
  @PrimaryGeneratedColumn({ name: 'siis_web_id' })
  siisWebId: number;

  @CreateDateColumn({
    name: 'siis_web_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  siisWebRegistrado: Date;

  @ApiProperty({ description: 'Fecha de modificación' })
  @UpdateDateColumn({
    name: 'siis_web_modificado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  siisWebModificado: Date;

  @ApiProperty({ description: 'Estado' })
  @Column('char', { name: 'siis_web_estado', default: 'A', length: 1 })
  siisWebEstado: string;

  @OneToMany(() => Ruta, (ruta) => ruta.siisWeb)
  rutas: Ruta[];
}
