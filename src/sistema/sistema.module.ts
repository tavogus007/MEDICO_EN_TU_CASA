import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiisWeb } from './entities/siis.entity';
import { Igob } from './entities/igob.entity';
import { SiisWebService } from './services/siis.service';
import { SiisController } from './controllers/siis.controller';
import { IgobController } from './controllers/igob.controller';
import { IgobService } from './services/igob.service';
import { AgendaModule } from 'src/agenda/agenda.module';
import { RutaModule } from 'src/ruta/ruta.module';
import { HistorialModule } from 'src/historial/historial.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SiisWeb, Igob]),
    AgendaModule,
    RutaModule,
    HistorialModule,
  ],
  providers: [SiisWebService, IgobService],
  controllers: [SiisController, IgobController],
  exports: [TypeOrmModule, IgobService, SiisWebService],
})
export class SistemaModule {}
