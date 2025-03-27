import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Ruta } from './ruta.entity';

@Entity({ name: 'mec_mapaderutas', schema: 'medico_en_tu_casa_v2' })
export class MapaRutas {
  @PrimaryGeneratedColumn({ name: 'mapa_id' })
  mapaId: number;

  @CreateDateColumn({
    name: 'mapa_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  mapaRegistrado: Date;

  @UpdateDateColumn({
    name: 'mapa_modificado',
    type: 'timestamp',
    nullable: true,
  })
  mapaModificado: Date | null;

  @Column({
    name: 'mapa_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  mapaEstado: string;

  @Column({
    name: 'mapa_latitud',
    type: 'decimal',
    precision: 10,
    scale: 8,
  })
  mapaLatitud: number;

  @Column({
    name: 'mapa_longitud',
    type: 'decimal',
    precision: 10,
    scale: 8,
  })
  mapaLongitud: number;

  @ManyToOne(() => Ruta)
  @JoinColumn({ name: 'ruta_id' })
  ruta: Ruta;
}
