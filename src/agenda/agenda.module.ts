import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Agenda } from './entities/agenda.entity';
import { FormDiagnostico } from './entities/formulario.entity';
import { AgendaService } from './services/agenda.service';
import { AgendaController } from './controllers/agenda.controller';
import { FormularioService } from './services/formulario.service';
import { FormController } from './controllers/formulario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agenda, FormDiagnostico])],
  providers: [AgendaService, FormularioService],
  controllers: [AgendaController, FormController],
  exports: [], //*
})
export class AgendaModule {}
