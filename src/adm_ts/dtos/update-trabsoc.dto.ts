import { ApiProperty } from '@nestjs/swagger';

export class UpdateTrabajoSocialDto {
  @ApiProperty({
    description: 'Identificador del trabajo social',
    required: false,
  })
  ts_identificador?: string;

  @ApiProperty({ description: 'Estado del trabajo social', required: false })
  ts_estado?: string;

  @ApiProperty({
    description: 'ID del usuario que registró el trabajo social',
    required: false,
  })
  ts_usuario_id?: number;

  @ApiProperty({
    description: 'ID del hospital asociado al trabajo social',
    required: false,
  })
  ts_hsp_id?: number;
}
