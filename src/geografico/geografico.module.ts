import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MacrodistritoService } from './services/macrodistrito.service';
import { MacrodistritoController } from './controllers/macrodistrito.controller';
import { Macrodistrito } from './entities/macrodistrito.entity';
import { DistritoController } from './controllers/distrito.controller';
import { DistritoService } from './services/distrito.service';
import { Distrito } from './entities/distrito.entity';
import { ZonaController } from './controllers/zona.controller';
import { ZonaService } from './services/zona.service';
import { Zona } from './entities/zona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Macrodistrito, Distrito, Zona])],
  providers: [MacrodistritoService, DistritoService, ZonaService],
  controllers: [MacrodistritoController, DistritoController, ZonaController],
  exports: [],
})
export class GeograficoModule {}
