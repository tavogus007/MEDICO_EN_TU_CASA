import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Igob } from '../../sistema/entities/igob.entity';

@Entity({ name: 'mec_informacion_pago', schema: 'medico_en_tu_casa_v2' })
export class InformacionPago {
  @PrimaryGeneratedColumn({ name: 'info_pago_id' })
  infoPagoId: number;

  @CreateDateColumn({
    name: 'info_pago_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  infoPagoRegistrado: Date;

  @UpdateDateColumn({
    name: 'info_pago_modificado',
    type: 'timestamp',
    nullable: true,
  })
  infoPagoModificado: Date | null;

  @Column({
    name: 'info_pago_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  infoPagoEstado: string;

  @Column({
    name: 'info_pago_monto',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  infoPagoMonto: number | null;

  @Column({
    name: 'info_pago_descripcion',
    type: 'text',
    nullable: true,
  })
  infoPagoDescripcion: string | null;

  @ManyToOne(() => Igob)
  @JoinColumn({ name: 'igob_id' })
  igob: Igob;
}
