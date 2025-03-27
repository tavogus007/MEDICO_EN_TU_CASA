import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ruta } from './entities/ruta.entity';
import { SiisWeb } from '../sistema/entities/siis.entity';
import { RutaService } from './services/ruta.service';
import { RutaController } from './controllers/ruta.controller';
import { InfoDomicilio } from './entities/infodom.entity';
import { InfoDomicilioService } from './services/infodom.service';
import { InfoDomicilioController } from './controllers/infodom.controller';
import { ConstruccionRuta } from './entities/construta.entity';
import { ConstruccionRutaService } from './services/construta.service';
import { ConstruccionRutaController } from './controllers/construta.controller';
import { MapaRutas } from './entities/maparuta.entity';
import { MapaRutasService } from './services/maparuta.service';
import { MapaRutasController } from './controllers/maparutas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ruta,
      SiisWeb,
      InfoDomicilio,
      ConstruccionRuta,
      MapaRutas,
    ]),
  ],
  providers: [
    RutaService,
    InfoDomicilioService,
    ConstruccionRutaService,
    MapaRutasService,
  ],
  controllers: [
    RutaController,
    InfoDomicilioController,
    ConstruccionRutaController,
    MapaRutasController,
  ],
  exports: [TypeOrmModule],
})
export class RutaModule {}
