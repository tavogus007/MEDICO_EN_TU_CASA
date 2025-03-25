import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MacrodistritoService } from './services/macrodistrito.service';
import { MacrodistritoController } from './controllers/macrodistrito.controller';
import { Macrodistrito } from './entities/macrodistrito.entity';
import { DistritoController } from './controllers/distrito.controller';
import { DistritoService } from './services/distrito.service';
import { Distrito } from './entities/distrito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Macrodistrito, Distrito])],
  providers: [MacrodistritoService, DistritoService],
  controllers: [MacrodistritoController, DistritoController],
  exports: [],
})
export class GeograficoModule {}
