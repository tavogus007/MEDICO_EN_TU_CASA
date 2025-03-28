import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// import { Agenda } from '../../agenda/entities/agenda.entity';

@Entity({ name: 'mec_trabajo_social', schema: 'medico_en_tu_casa_v2' })
export class TrabajoSocial {
  @PrimaryColumn({ name: 'pers_id' })
  persId: number;

  @CreateDateColumn({
    name: 'ts_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  tsRegistrado: Date;

  @UpdateDateColumn({
    name: 'ts_modificado',
    type: 'timestamp',
    nullable: true,
  })
  tsModificado: Date | null;

  @Column({
    name: 'ts_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  tsEstado: string;

  @Column({
    name: 'ts_usuario',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  tsUsuario: string | null;

  // @OneToMany(() => Agenda, (agenda) => agenda.trabSoc)
  // agendas?: Agenda[];
}
