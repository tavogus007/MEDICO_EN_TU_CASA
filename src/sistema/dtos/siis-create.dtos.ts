import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateSiisWebDto {
  @ApiProperty({
    type: String,
    description: 'Estado del SIIS Web',
    required: true,
    default: 'A',
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  siisWebEstado: string;
}
