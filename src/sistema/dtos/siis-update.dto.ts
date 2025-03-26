import { IsString, Length } from 'class-validator';
import { CreateSiisWebDto } from './siis-create.dtos';
import { PartialType } from '@nestjs/swagger';

export class UpdateSiisWebDto extends PartialType(CreateSiisWebDto) {
  @IsString()
  @Length(1, 1)
  siisWebEstado: string;
}
