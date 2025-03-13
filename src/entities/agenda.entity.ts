import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mec_agenda', schema: 'medico_en_tu_casa' })
export class Agenda {
  @PrimaryGeneratedColumn()
  age_id: number;

  @Column({ type: 'varchar', length: 50 }) // Cambiado de 'text' a 'varchar'
  age_historico: string;

  @Column({ type: 'varchar', length: 50 }) // Cambiado de 'text' a 'varchar'
  age_historia_clinica: string;

  @Column({ type: 'boolean' }) // Cambiado de 'bool' a 'boolean' (opcional, ambos funcionan)
  age_diagnostico: boolean;

  @Column({ type: 'varchar', length: 50 }) // Cambiado de 'text' a 'varchar'
  age_paciente: string;

  @Column({ type: 'varchar', length: 100 }) // Cambiado de 'text' a 'varchar'
  age_razon_consulta: string;

  @Column({ type: 'integer' })
  age_celular_referencia: number;

  @Column({ type: 'varchar', length: 100 }) // Cambiado de 'text' a 'varchar'
  age_info_domicilio: string;

  @Column({ type: 'varchar', length: 15 }) // Cambiado de 'text' a 'varchar'
  age_cod_ficha: string;

  @Column({ type: 'boolean' }) // Cambiado de 'bool' a 'boolean' (opcional, ambos funcionan)
  age_m_a: boolean;
}