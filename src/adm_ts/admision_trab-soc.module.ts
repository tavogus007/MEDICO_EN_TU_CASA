import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admisiones } from './entities/admisiones.entity';
import { AdmisionesService } from './services/admisiones.service';
import { AdmisionesController } from './controllers/admisiones.controller';
import { TrabajoSocial } from './entities/trabajoSoclal.entity';
import { TrabsocialService } from './services/trabsocial.service';
import { TrabajoSocialController } from './controllers/trabajo-social.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admisiones, TrabajoSocial])],
  providers: [AdmisionesService, TrabsocialService],
  controllers: [AdmisionesController, TrabajoSocialController],
  exports: [TypeOrmModule], // Esto permite que otros módulos usen esta entidad
})
export class AdmisionTrabSocModule {}
