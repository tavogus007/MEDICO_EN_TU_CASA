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

import { ConstruccionRutaService } from '../services/construta.service';
import { ConstruccionRuta } from '../entities/construta.entity';
import { CreateConstruccionRutaDto } from '../dtos/create-construta.dto';
import { UpdateConstruccionRutaDto } from '../dtos/update-construta.dto';

@ApiTags('Construcción de Rutas')
@Controller('construccion-ruta')
export class ConstruccionRutaController {
  constructor(private readonly service: ConstruccionRutaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las construcciones' })
  @ApiResponse({
    status: 200,
    description: 'Lista de registros',
    type: [ConstruccionRuta],
  })
  async findAll(): Promise<ConstruccionRuta[]> {
    return this.service.findAll();
  }
  @Post()
  @ApiOperation({ summary: 'Registrar nueva construcción de ruta' })
  @ApiResponse({
    status: 201,
    description: 'Registro creado',
    type: ConstruccionRuta,
  })
  async create(
    @Body() dto: CreateConstruccionRutaDto,
  ): Promise<ConstruccionRuta> {
    return this.service.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una construcción por ID' })
  @ApiResponse({
    status: 200,
    description: 'Registro encontrado',
    type: ConstruccionRuta,
  })
  async findOne(@Param('id') id: number): Promise<ConstruccionRuta> {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro actualizado',
    type: ConstruccionRuta,
  })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateConstruccionRutaDto,
  ): Promise<ConstruccionRuta> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar registro' })
  @ApiResponse({
    status: 204,
    description: 'Registro eliminado',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
