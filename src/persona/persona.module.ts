import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonaService } from './services/persona.service';
import { PersonaController } from './controllers/persona.controller';
import { Persona } from './entities/persona.entity';
import { Paciente } from './entities/paciente.entity';
import { PacienteService } from './services/paciente.service';
import { PacienteController } from './controllers/paciente.controller';
import { SistemaModule } from '../sistema/sistema.module';
import { SmartwatchModule } from 'src/smartwatch/smartwatch.module';
import { RutaModule } from 'src/ruta/ruta.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona, Paciente]),
    SistemaModule,
    SmartwatchModule,
    RutaModule,
  ],
  providers: [PersonaService, PacienteService],
  controllers: [PersonaController, PacienteController],
  exports: [TypeOrmModule, PersonaService],
})
export class PersonaModule {}
