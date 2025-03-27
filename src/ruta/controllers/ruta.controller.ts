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
import { RutaService } from '../services/ruta.service';
import { Ruta } from '../entities/ruta.entity';
import { CreateRutaDto } from '../dtos/create-ruta.dto';
import { UpdateRutaDto } from '../dtos/update-ruta.dto';

@ApiTags('Rutas')
@Controller('rutas')
export class RutaController {
  constructor(private readonly rutaService: RutaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las rutas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de rutas',
    type: [Ruta],
  })
  async findAll(): Promise<Ruta[]> {
    return this.rutaService.findAll();
  }
  @Post()
  @ApiOperation({ summary: 'Crear nueva ruta' })
  @ApiResponse({
    status: 201,
    description: 'Ruta creada',
    type: Ruta,
  })
  async create(@Body() dto: CreateRutaDto): Promise<Ruta> {
    return this.rutaService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ruta por ID' })
  @ApiResponse({
    status: 200,
    description: 'Ruta encontrada',
    type: Ruta,
  })
  async findOne(@Param('id') id: number): Promise<Ruta> {
    return this.rutaService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar ruta' })
  @ApiResponse({
    status: 200,
    description: 'Ruta actualizada',
    type: Ruta,
  })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateRutaDto,
  ): Promise<Ruta> {
    return this.rutaService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ruta' })
  @ApiResponse({
    status: 204,
    description: 'Ruta eliminada',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return this.rutaService.delete(id);
  }
}
