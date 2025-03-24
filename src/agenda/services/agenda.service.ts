import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateAgendaDto } from '../dtos/update-agenda.dto';
import { Agenda } from '../entities/agenda.entity';

@Injectable()
export class AgendaService {
  constructor(
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>,
  ) {}

  async findAll(): Promise<Agenda[]> {
    return await this.agendaRepository.find({
      relations: ['admision', 'trabSoc'],
    });
  }

  async findOne(id: number): Promise<Agenda> {
    return this.agendaRepository.findOne({
      where: { age_id: id },
    });
  }

  async create(data: Partial<Agenda>): Promise<Agenda> {
    const expediente = this.agendaRepository.create(data);
    return await this.agendaRepository.save(expediente);
  }

  async update(id: number, data: UpdateAgendaDto): Promise<Agenda> {
    const agenda = await this.agendaRepository.findOne({
      where: { age_id: id },
    });
    if (!agenda) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }
    this.agendaRepository.merge(agenda, data);
    return await this.agendaRepository.save(agenda);
  }

  async delete(id: number): Promise<void> {
    const agenda = await this.agendaRepository.findOne({
      where: { age_id: id },
    });
    if (!agenda) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }
    await this.agendaRepository.delete(id);
  }
}
