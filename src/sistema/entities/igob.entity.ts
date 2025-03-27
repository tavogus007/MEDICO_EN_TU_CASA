import { InformacionPago } from 'src/infopago/entities/infopago.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'mec_igob', schema: 'medico_en_tu_casa_v2' })
export class Igob {
  @PrimaryGeneratedColumn({ name: 'igob_id' })
  igobId: number;

  @CreateDateColumn({
    name: 'igob_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  igobRegistrado: Date;

  @UpdateDateColumn({
    name: 'igob_modificado',
    type: 'timestamp',
    nullable: true,
  })
  igobModificado: Date | null;

  @Column({
    name: 'igob_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  igobEstado: string;

  @OneToMany(() => InformacionPago, (pago) => pago.igob)
  pagos: InformacionPago[]; // Nombre del campo para acceder a los pagos
}
