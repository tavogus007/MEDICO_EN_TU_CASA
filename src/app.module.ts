import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgendaController } from './controllers/mec_agenda/agenda/agenda.controller';
import { FormularioController } from './controllers/mec_agenda/formulario/formulario.controller';
import { HistorialController } from './controllers/mec_historial/historial.controller';
import { AgendaService } from './services/agenda.service';
import { RutaService } from './services/ruta.service';
import { HistorialService } from './services/historial.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    AgendaController,
    FormularioController,
    HistorialController,
  ],
  providers: [AppService, AgendaService, RutaService, HistorialService],
})
export class AppModule {}
