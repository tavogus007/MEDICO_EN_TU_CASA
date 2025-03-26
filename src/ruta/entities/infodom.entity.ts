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
import { Ruta } from './ruta.entity';
import { Paciente } from 'src/persona/entities/paciente.entity';

@Entity({ name: 'mec_info_domicilio', schema: 'medico_en_tu_casa_v2' })
export class InfoDomicilio {
  @PrimaryGeneratedColumn({ name: 'info_dom_id' })
  infoDomId: number;

  @CreateDateColumn({
    name: 'info_dom_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  infoDomRegistrado: Date;

  @UpdateDateColumn({
    name: 'info_dom_modificado',
    type: 'timestamp',
    nullable: true,
  })
  infoDomModificado: Date | null;

  @Column({
    name: 'info_dom_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  infoDomEstado: string;

  @Column({
    name: 'info_dom_referencia',
    type: 'text',
    nullable: true,
  })
  infoDomReferencia: string | null;

  @ManyToOne(() => Ruta)
  @JoinColumn({ name: 'ruta_id' })
  ruta: Ruta;

  @OneToMany(() => Paciente, (paciente) => paciente.infoDomicilio)
  pacientes: Paciente[];
}
