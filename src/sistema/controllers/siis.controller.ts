import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';

import { SiisWebService } from '../services/siis.service';
import { SiisWeb } from '../entities/siis.entity';
import { UpdateSiisWebDto } from '../dtos/siis-update.dto';
import { CreateSiisWebDto } from '../dtos/siis-create.dtos';
import { ApiOperation } from '@nestjs/swagger';

@Controller('siis')
export class SiisController {
  constructor(private readonly mecSiisWebService: SiisWebService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los sistemas web' })
  async findAll(): Promise<SiisWeb[]> {
    return await this.mecSiisWebService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Introduce un sistema web' })
  async create(@Body() createDto: CreateSiisWebDto): Promise<SiisWeb> {
    return await this.mecSiisWebService.create(createDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SiisWeb> {
    try {
      return await this.mecSiisWebService.findOne(Number(id));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Actualiza la información de un sistema web',
  })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateSiisWebDto,
  ): Promise<SiisWeb> {
    try {
      return await this.mecSiisWebService.update(Number(id), updateDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un sistema web' })
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.mecSiisWebService.delete(Number(id));
      return { message: 'Registro eliminado exitosamente' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
