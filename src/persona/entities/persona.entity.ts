import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('mec_persona', { schema: 'medico_en_tu_casa_v2' })
export class Persona {
  @PrimaryGeneratedColumn({ name: 'pers_id' })
  pers_id: number;

  @CreateDateColumn({
    name: 'pers_registrado',
    type: 'timestamptz', // timestamp with time zone
    default: () => 'CURRENT_TIMESTAMP',
  })
  persRegistrado: Date;

  @ApiProperty({ description: 'Fecha de modificación' })
  @UpdateDateColumn({
    name: 'pers_modificado',
    type: 'timestamptz',
    nullable: true,
    transformer: {
      to: (value: Date) => value, // Se guarda como UTC
      from: (value: Date) => new Date(value), // Se convierte al leer
    },
  })
  persModificado: Date | null;

  @ApiProperty({ description: 'Estado' })
  @Column('char', { name: 'pers_estado', default: 'A', length: 1 })
  persEstado: string;

  @ApiProperty({ description: 'Cédula de identidad' })
  @Column('varchar', { name: 'pers_ci', length: 20 })
  persCi: string;

  @ApiProperty({ description: 'Apellido paterno' })
  @Column('varchar', { name: 'pers_paterno', length: 100 })
  persPaterno: string;

  @ApiProperty({ description: 'Apellido materno' })
  @Column('varchar', { name: 'pers_materno', length: 100 })
  persMaterno: string;

  @ApiProperty({ description: 'Nombre' })
  @Column('varchar', { name: 'pers_nombre', length: 100 })
  persNombre: string;

  @ApiProperty({ description: 'Sexo' })
  @Column('char', { name: 'pers_sexo', length: 1 })
  persSexo: string;
}
