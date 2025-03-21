import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

import { Agenda } from '../entities/agenda.entity';
import { AgendaService } from '../services/agenda.service';
import { CreateAgendaDto } from '../dtos/agenda/create-agenda.dto';
import { UpdateAgendaDto } from '../dtos/agenda/update-agenda.dto';

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
  @ApiOperation({ summary: 'Introduce un paciente en la agenda' })
  async create(@Body() data: CreateAgendaDto): Promise<Agenda> {
    return await this.agendaService.create(data);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Actualiza la información de un paciente en la agenda',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del paciente a actualizar',
    type: 'number',
  })
  async update(
    @Param('id') id: number,
    @Body() data: UpdateAgendaDto,
  ): Promise<Agenda> {
    return await this.agendaService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un paciente de la agenda' })
  @ApiParam({
    name: 'id',
    description: 'ID del paciente a eliminar',
    type: 'number',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return await this.agendaService.delete(id);
  }
}
