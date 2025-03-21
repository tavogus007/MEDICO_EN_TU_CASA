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

import { FormDiagnostico } from '../entities/formulario.entity';
import { FormularioService } from '../services/formulario.service';
import { CreateFormDto } from '../dtos/formulario/create-formulario.dto';
import { UpdateFormDto } from '../dtos/formulario/update-formulario.dto';

@ApiTags('formulario de un paciente')
@Controller('formulario')
export class FormController {
  constructor(private readonly formService: FormularioService) {}

  @Get()
  @ApiOperation({ summary: 'Muestra la informacion del formulario del doctor' })
  async findAll(): Promise<FormDiagnostico[]> {
    return await this.formService.findAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Introduce un paciente en el formulario de diagnostico',
  })
  async create(@Body() data: CreateFormDto): Promise<FormDiagnostico> {
    return await this.formService.create(data);
  }

  @Put(':id')
  @ApiOperation({
    summary:
      'Actualiza la información de un paciente en el formulario de diagnostico',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del paciente a actualizar',
    type: 'number',
  })
  async update(
    @Param('id') id: number,
    @Body() data: UpdateFormDto,
  ): Promise<FormDiagnostico> {
    return await this.formService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un paciente del formulario' })
  @ApiParam({
    name: 'id',
    description: 'ID del paciente a eliminar',
    type: 'number',
  })
  async delete(@Param('id') id: number): Promise<void> {
    return await this.formService.delete(id);
  }
}
