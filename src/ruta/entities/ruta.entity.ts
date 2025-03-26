import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { SiisWeb } from '../../sistema/entities/siis.entity';
import { InfoDomicilio } from './infodom.entity';

@Entity({ name: 'mec_ruta', schema: 'medico_en_tu_casa_v2' })
export class Ruta {
  @PrimaryGeneratedColumn({ name: 'ruta_id' })
  rutaId: number;

  @CreateDateColumn({
    name: 'ruta_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  rutaRegistrado: Date;

  @UpdateDateColumn({
    name: 'ruta_modificado',
    type: 'timestamp',
    nullable: true,
  })
  rutaModificado: Date | null;

  @Column({
    name: 'ruta_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  rutaEstado: string;

  @Column({
    name: 'ruta_origen',
    type: 'text',
  })
  rutaOrigen: string;

  @Column({
    name: 'ruta_destino',
    type: 'text',
  })
  rutaDestino: string;

  @Column({
    name: 'ruta_duracion_aprox',
    type: 'integer',
    nullable: true,
  })
  rutaDuracionAprox: number | null;

  @ManyToOne(() => SiisWeb)
  @JoinColumn({ name: 'siis_web_id' })
  siisWeb: SiisWeb;

  @OneToMany(() => InfoDomicilio, (info) => info.ruta)
  infoDomicilio: InfoDomicilio[];
}
