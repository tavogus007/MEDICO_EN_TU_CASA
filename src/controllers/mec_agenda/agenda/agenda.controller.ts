import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgendaService } from '../../../services/agenda.service';
import { Agenda } from '../../../entities/agenda.entity';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  async findAll(): Promise<Agenda[]> {
    return await this.agendaService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<Agenda>): Promise<Agenda> {
    return await this.agendaService.create(data);
  }
}
