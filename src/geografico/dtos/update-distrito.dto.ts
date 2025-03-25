import { PartialType } from '@nestjs/mapped-types';
import { CreateDistritoDto } from './create-distrito.dto';
import { IsInt, IsOptional, Min, IsIn } from 'class-validator';

export class UpdateDistritoDto extends PartialType(CreateDistritoDto) {
  @IsOptional()
  @IsInt()
  @Min(1)
  distNro?: number;

  @IsOptional()
  @IsIn(['A', 'I'])
  distEstado?: string;

  @IsOptional()
  @IsInt()
  macroId?: number;
}