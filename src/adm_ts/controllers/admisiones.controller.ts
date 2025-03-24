import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AdmisionesService } from '../services/admisiones.service';
import { CreateAdmisionDto } from '../dtos/create-admision.dto';
import { UpdateAdmisionDto } from '../dtos/update-admision.dto';

@Controller('admisiones')
export class AdmisionesController {
  constructor(private readonly admisionesService: AdmisionesService) {}

  @Get()
  findAll() {
    return this.admisionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.admisionesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAdmisionDto) {
    return this.admisionesService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAdmisionDto) {
    return this.admisionesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.admisionesService.remove(id);
  }
}
