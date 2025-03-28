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
import { Doctor } from './entities/doctor.entity';
import { DoctorService } from './services/doctor.service';
import { DoctorController } from './controllers/doctor.controller';
import { VehiculoModule } from '../vehiculo/vehiculo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona, Paciente, Doctor]),
    SistemaModule,
    SmartwatchModule,
    RutaModule,
    VehiculoModule,
  ],
  providers: [PersonaService, PacienteService, DoctorService],
  controllers: [PersonaController, PacienteController, DoctorController],
  exports: [TypeOrmModule],
})
export class PersonaModule {}
