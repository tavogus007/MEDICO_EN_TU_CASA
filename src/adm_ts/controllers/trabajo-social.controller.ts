import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TrabsocialService } from '../services/trabsocial.service';
import { CreateTrabajoSocialDto } from '../dtos/create-trabsoc.dto';
import { UpdateTrabajoSocialDto } from '../dtos/update-trabsoc.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrabajoSocial } from '../entities/trabajoSoclal.entity';

@Controller('trabajosocial')
export class TrabajoSocialController {
  constructor(private readonly trabsocialService: TrabsocialService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos las entidades Admision' })
  @ApiResponse({
    status: 200,
    description: 'Lista de entidades admision',
    type: [TrabajoSocial],
  })
  async findAll(): Promise<TrabajoSocial[]> {
    return this.trabsocialService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Registrar un Trabajo social' })
  @ApiResponse({
    status: 201,
    description: 'Trabajo social creado',
    type: TrabajoSocial,
  })
  async create(@Body() dto: CreateTrabajoSocialDto): Promise<TrabajoSocial> {
    return this.trabsocialService.create(dto);
  }

  @Get(':persId')
  @ApiOperation({ summary: 'Obtener trabajo social por ID' })
  @ApiResponse({
    status: 200,
    description: 'Trabajo sociañ encontrado',
    type: TrabajoSocial,
  })
  async findOne(@Param('persId') persId: number): Promise<TrabajoSocial> {
    return this.trabsocialService.findOne(persId);
  }

  @Put(':persId')
  @ApiOperation({ summary: 'Actualizar información de trabajo social' })
  @ApiResponse({
    status: 200,
    description: 'Trabajo social actualizado',
    type: TrabajoSocial,
  })
  async update(
    @Param('persId') persId: number,
    @Body() dto: UpdateTrabajoSocialDto,
  ): Promise<TrabajoSocial> {
    return this.trabsocialService.update(persId, dto);
  }

  @Delete(':persId')
  @ApiOperation({ summary: 'Eliminar una entidad Trabajo social' })
  @ApiResponse({
    status: 204,
    description: 'Trabajo social eliminado',
  })
  async delete(@Param('persId') persId: number): Promise<void> {
    return this.trabsocialService.delete(persId);
  }
}
