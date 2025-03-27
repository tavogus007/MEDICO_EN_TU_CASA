import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAgendaDto } from './create-agenda.dto';
import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class UpdateAgendaDto extends PartialType(CreateAgendaDto) {
  @ApiProperty({
    example: 'I',
    description: 'Estado actualizado',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 1)
  ageEstado?: string;

  @ApiProperty({
    example: 3,
    description: 'Nuevo ID de admisión',
    required: false,
  })
  @IsOptional()
  @IsInt()
  admisionId?: number;

  @ApiProperty({
    example: 4,
    description: 'Nuevo ID de trabajo social',
    required: false,
  })
  @IsOptional()
  @IsInt()
  tsId?: number;
}
