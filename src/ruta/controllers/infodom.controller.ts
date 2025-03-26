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
import { InfoDomicilioService } from '../services/infodom.service';
import { InfoDomicilio } from '../entities/infodom.entity';
import { CreateInfoDomicilioDto } from '../dtos/create.infodom.dto';
import { UpdateInfoDomicilioDto } from '../dtos/update-infodom.dto';

@ApiTags('Información de Domicilio')
@Controller('info-domicilio')
export class InfoDomicilioController {
  constructor(private readonly infoDomService: InfoDomicilioService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los registros' })
  @ApiResponse({
    status: 200,
    description: 'Lista de registros',
    type: [InfoDomicilio],
  })
  async findAll(): Promise<InfoDomicilio[]> {
    return this.infoDomService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear información de domicilio' })
  @ApiResponse({
    status: 201,
    description: 'Registro creado',
    type: InfoDomicilio,
  })
  async create(@Body() dto: CreateInfoDomicilioDto): Promise<InfoDomicilio> {
    return this.infoDomService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un registro por ID' })
  @ApiResponse({
    status: 200,
    description: 'Registro encontrado',
    type: InfoDomicilio,
  })
  async findOne(@Param('id') id: number): Promise<InfoDomicilio> {
    return this.infoDomService.findOne(id);
  }
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar información de domicilio' })
  @ApiResponse({
    status: 200,
    description: 'Registro actualizado',
    type: InfoDomicilio,
  })
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateInfoDomicilioDto,
  ): Promise<InfoDomicilio> {
    return this.infoDomService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un registro' })
  @ApiResponse({
    status: 204,
    description: 'Registro eliminado',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return this.infoDomService.delete(id);
  }
}
