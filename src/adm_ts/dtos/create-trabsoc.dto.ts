import { ApiProperty } from '@nestjs/swagger';

export class CreateTrabajoSocialDto {
  @ApiProperty({ description: 'Identificador del trabajo social' })
  ts_identificador: string;

  @ApiProperty({ description: 'ID del usuario que registró el trabajo social' })
  ts_usuario_id: number;

  @ApiProperty({ description: 'ID del hospital asociado al trabajo social' })
  ts_hsp_id: number;
}
