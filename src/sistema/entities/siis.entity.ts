import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Ruta } from 'src/ruta/entities/ruta.entity';
import { Agenda } from 'src/agenda/entities/agenda.entity'; // Asegúrate de importar las entidades correctas
import { Historial } from 'src/historial/entities/historial.entity'; // Asegúrate de importar las entidades correctas
import { Doctor } from 'src/persona/entities/doctor.entity';

@Entity('mec_siis_web', { schema: 'medico_en_tu_casa_v2' })
export class SiisWeb {
  @ApiProperty({ description: 'Requerido' })
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

  @ApiProperty({ description: 'Relación con Agenda' })
  @OneToOne(() => Agenda, (agenda) => agenda.siisWeb)
  @JoinColumn({ name: 'age_id' })
  agenda: Agenda;

  @ApiProperty({ description: 'Relación con Ruta' })
  @OneToOne(() => Ruta, (ruta) => ruta.siisWeb)
  @JoinColumn({ name: 'ruta_id' })
  ruta: Ruta;

  @ApiProperty({ description: 'Relación con Historial' })
  @OneToOne(() => Historial, (historial) => historial.siisWeb)
  @JoinColumn({ name: 'histo_id' })
  historial: Historial;

  @OneToMany(() => Doctor, (doctor) => doctor.siisWeb)
  doctores: Doctor[];
}
