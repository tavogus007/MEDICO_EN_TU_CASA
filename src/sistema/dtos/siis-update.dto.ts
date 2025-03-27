import { PartialType } from '@nestjs/swagger';
import { CreateSiisWebDto } from './siis-create.dtos';

export class UpdateSiisWebDto extends PartialType(CreateSiisWebDto) {}
