import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Agenda } from './entities/agenda.entity';
import { FormDiagnostico } from './entities/formulario.entity';
import { AgendaService } from './services/agenda.service';
import { AgendaController } from './controllers/agenda.controller';
import { FormularioService } from './services/formulario.service';
import { FormController } from './controllers/formulario.controller';
import { AdmisionTrabSocModule } from 'src/adm_ts/admision_trab-soc.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Agenda, FormDiagnostico]),
    AdmisionTrabSocModule,
  ],
  providers: [AgendaService, FormularioService],
  controllers: [AgendaController, FormController],
  exports: [], //*
})
export class AgendaModule {}
