import { SiisWeb } from 'src/sistema/entities/siis.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'mec_historial', schema: 'medico_en_tu_casa_v2' })
export class Historial {
  @PrimaryGeneratedColumn({ name: 'histo_id' })
  histoId: number;

  @CreateDateColumn({
    name: 'histo_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  histoRegistrado: Date;

  @UpdateDateColumn({
    name: 'histo_modificado',
    type: 'timestamp',
    nullable: true,
  })
  histoModificado: Date | null;

  @Column({
    name: 'histo_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  histoEstado: string;

  @Column({
    name: 'histo_descripcion',
    type: 'text',
    nullable: true,
  })
  histoDescripcion: string | null;

  @Column({
    name: 'histo_usuario_id',
    type: 'integer',
  })
  histoUsuarioId: number;

  @OneToOne(() => SiisWeb, (siisWeb) => siisWeb.ruta)
  siisWeb: SiisWeb;
}
