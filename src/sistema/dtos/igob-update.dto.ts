import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateIgobDto {
  @ApiProperty({
    example: 'I',
    description: 'Estado del registro',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  igobEstado?: string;
}
