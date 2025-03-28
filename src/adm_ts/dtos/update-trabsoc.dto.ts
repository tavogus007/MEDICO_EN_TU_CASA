import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateTrabajoSocialDto {
  @ApiProperty({
      example: 'A',
      description: 'Estado de trabajo social (A=Activo, I=Inactivo)',
      required: false,
    })
    @IsOptional()
    @IsString()
    @Length(1, 1)
    tsEstado?: string;
  
    @ApiProperty({
      example: 'mgarcia',
      description: 'Nombre de usuario de trabajo social',
      required: false,
    })
    @IsOptional()
    @IsString()
    @Length(1, 50)
    tsUsuario?: string;
}
