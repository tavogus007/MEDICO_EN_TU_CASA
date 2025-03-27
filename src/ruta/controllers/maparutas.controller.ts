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
import { MapaRutasService } from '../services/maparuta.service';
import { MapaRutas } from '../entities/maparuta.entity';
import { CreateMapaRutasDto } from '../dtos/create-maparuta.dto';
import { UpdateMapaDeRutasDto } from '../dtos/update-maparuta.dto';

@ApiTags('Mapa de Rutas')
@Controller('mapa-rutas')
export class MapaRutasController {
  constructor(private readonly service: MapaRutasService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar nueva ubicación en mapa' })
  @ApiResponse({
    status: 201,
    description: 'Ubicación registrada',
    type: MapaRutas,
  })
  async create(@Body() dto: CreateMapaRutasDto): Promise<MapaRutas> {
    return this.service.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar ubicación en mapa' })
  @ApiResponse({
    status: 200,
    description: 'Ubicación actualizada',
    type: MapaRutas,
  })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateMapaDeRutasDto,
  ): Promise<MapaRutas> {
    return this.service.update(id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las ubicaciones' })
  @ApiResponse({
    status: 200,
    description: 'Lista de ubicaciones',
    type: [MapaRutas],
  })
  async findAll(): Promise<MapaRutas[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener ubicación por ID' })
  @ApiResponse({
    status: 200,
    description: 'Ubicación encontrada',
    type: MapaRutas,
  })
  async findOne(@Param('id') id: number): Promise<MapaRutas> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar ubicación' })
  @ApiResponse({
    status: 204,
    description: 'Ubicación eliminada',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
