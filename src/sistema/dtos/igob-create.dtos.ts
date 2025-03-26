import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateIgobDto {
  @ApiProperty({
    example: 'A',
    description: 'Estado del registro',
    default: 'A',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  igobEstado?: string;
}
