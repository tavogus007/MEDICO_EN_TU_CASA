import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ruta } from './entities/ruta.entity';
import { SiisWeb } from '../sistema/entities/siis.entity';
import { RutaService } from './services/ruta.service';
import { RutaController } from './controllers/ruta.controller';
import { SistemaModule } from '../sistema/sistema.module';
import { InfoDomicilio } from './entities/infodom.entity';
import { InfoDomicilioService } from './services/infodom.service';
import { InfoDomicilioController } from './controllers/infodom.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ruta, SiisWeb, InfoDomicilio]),
    SistemaModule,
  ],
  providers: [RutaService, InfoDomicilioService],
  controllers: [RutaController, InfoDomicilioController],
  exports: [TypeOrmModule, RutaService],
})
export class RutaModule {}
