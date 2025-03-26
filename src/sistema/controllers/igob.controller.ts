import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { IgobService } from '../services/igob.service';
import { Igob } from '../entities/igob.entity';
import { CreateIgobDto } from '../dtos/igob-create.dtos';
import { UpdateIgobDto } from '../dtos/igob-update.dto';

@Controller('igob')
export class IgobController {
  constructor(private readonly igobService: IgobService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los registros Igob' })
  @ApiResponse({ status: 200, description: 'Lista de registros', type: [Igob] })
  async findAll(): Promise<Igob[]> {
    return this.igobService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo registro Igob' })
  @ApiResponse({ status: 201, description: 'Registro creado', type: Igob })
  async create(@Body() dto: CreateIgobDto): Promise<Igob> {
    return this.igobService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un registro Igob por ID' })
  @ApiResponse({ status: 200, description: 'Registro encontrado', type: Igob })
  async findOne(@Param('id') id: number): Promise<Igob> {
    return this.igobService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un registro Igob' })
  @ApiResponse({ status: 200, description: 'Registro actualizado', type: Igob })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateIgobDto,
  ): Promise<Igob> {
    return this.igobService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un registro Igob' })
  @ApiResponse({ status: 204, description: 'Registro eliminado' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.igobService.delete(id);
  }
}
