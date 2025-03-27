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

@Entity({ name: 'mec_construccion_ruta', schema: 'medico_en_tu_casa_v2' })
export class ConstruccionRuta {
  @PrimaryGeneratedColumn({ name: 'const_ruta_id' })
  constRutaId: number;

  @CreateDateColumn({
    name: 'const_ruta_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  constRutaRegistrado: Date;

  @UpdateDateColumn({
    name: 'const_ruta_modificado',
    type: 'timestamp',
    nullable: true,
  })
  constRutaModificado: Date | null;

  @Column({
    name: 'const_ruta_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  constRutaEstado: string;

  @Column({
    name: 'const_ruta_descripcion',
    type: 'text',
    nullable: true,
  })
  constRutaDescripcion: string | null;

  @ManyToOne(() => Ruta)
  @JoinColumn({ name: 'ruta_id' })
  ruta: Ruta;
}
