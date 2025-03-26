import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mec_vehiculo', schema: 'medico_en_tu_casa_v2' })
export class Vehiculo {
  @PrimaryGeneratedColumn({ name: 'vehi_id' })
  vehiId: number;

  @CreateDateColumn({
    name: 'vehi_registrado',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  vehiRegistrado: Date;

  @UpdateDateColumn({
    name: 'vehi_modificado',
    type: 'timestamp',
    nullable: true,
  })
  vehiModificado: Date | null;

  @Column({
    name: 'vehi_estado',
    type: 'char',
    length: 1,
    default: 'A',
  })
  vehiEstado: string;

  @Column({
    name: 'vehi_placa',
    type: 'varchar',
    length: 20,
    unique: true,
  })
  vehiPlaca: string;

  @Column({
    name: 'vehi_descripcion_estado',
    type: 'text',
    nullable: true,
  })
  vehiDescripcionEstado: string | null;

  @Column({
    name: 'vehi_kilometraje',
    type: 'integer',
    nullable: true,
  })
  vehiKilometraje: number | null;
}
