import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { AgendaService } from '../services/agenda.service';
import { Agenda } from '../entities/agenda.entity';

@ApiTags('Agenda del paciente')
@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las agendas' })
  async findAll(): Promise<Agenda[]> {
    return await this.agendaService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<Agenda>): Promise<Agenda> {
    return await this.agendaService.create(data);
  }
}
