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

@Controller('trabajosocial')
export class TrabajoSocialController {
  constructor(private readonly trabsocialService: TrabsocialService) {}

  @Get()
  findAll() {
    return this.trabsocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.trabsocialService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTrabajoSocialDto) {
    return this.trabsocialService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTrabajoSocialDto) {
    return this.trabsocialService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.trabsocialService.remove(id);
  }
}
