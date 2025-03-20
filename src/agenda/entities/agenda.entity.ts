import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mec_agenda', schema: 'medico_en_tu_casa' })
export class Agenda {
  @PrimaryGeneratedColumn()
  age_id: number;

  @ApiProperty({ description: 'El historico del paciente' })
  @Column({ type: 'varchar', length: 50 })
  age_historico: string;

  @Column({ type: 'varchar', length: 50 })
  age_historia_clinica: string;

  @Column({ type: 'boolean' })
  age_diagnostico: boolean;

  @Column({ type: 'varchar', length: 50 })
  age_paciente: string;

  @Column({ type: 'varchar', length: 100 })
  age_razon_consulta: string;

  @Column({ type: 'integer' })
  age_celular_referencia: number;

  @Column({ type: 'varchar', length: 100 })
  age_info_domicilio: string;

  @Column({ type: 'varchar', length: 15 })
  age_cod_ficha: string;

  @Column({ type: 'boolean' })
  age_m_a: boolean;
}
