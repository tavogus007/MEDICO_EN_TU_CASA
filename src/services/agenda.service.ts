import { Injectable } from '@nestjs/common';
import { Agenda } from '../entities/agenda.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AgendaService {
    constructor(
        @InjectRepository(Agenda)
        private readonly agendaRepository: Repository<Agenda>,
    ) {}

    async findAll(): Promise<Agenda[]>{
        return await this.agendaRepository.find();
    }

    async create(data: Partial<Agenda>):Promise<Agenda>{
        const expediente = this.agendaRepository.create(data);
        return await this.agendaRepository.save(expediente);
    }
}
