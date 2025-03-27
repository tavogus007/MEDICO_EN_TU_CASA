import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HistorialService } from '../services/historial.service';
import { Historial } from '../entities/historial.entity';
import { CreateHistorialDto } from '../dtos/create-historial.dto';
import { UpdateHistorialDto } from '../dtos/update-historial.dto';

@ApiTags('Historial')
@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los registros' })
  @ApiResponse({
    status: 200,
    description: 'Lista de historiales',
    type: [Historial],
  })
  async findAll(): Promise<Historial[]> {
    return this.historialService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear nuevo registro de historial' })
  @ApiResponse({
    status: 201,
    description: 'Historial creado',
    type: Historial,
  })
  async create(@Body() dto: CreateHistorialDto): Promise<Historial> {
    return this.historialService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar historial médico' })
  @ApiResponse({
    status: 200,
    description: 'Historial actualizado',
    type: Historial,
  })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateHistorialDto,
  ): Promise<Historial> {
    return this.historialService.update(id, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un historial por ID' })
  @ApiResponse({
    status: 200,
    description: 'Historial encontrado',
    type: Historial,
  })
  async findOne(@Param('id') id: number): Promise<Historial> {
    return this.historialService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar registro de historial' })
  @ApiResponse({
    status: 204,
    description: 'Historial eliminado',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return this.historialService.delete(id);
  }
}
