import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonaService } from './services/persona.service';
import { PersonaController } from './controllers/persona.controller';
import { Persona } from './entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  providers: [PersonaService],
  controllers: [PersonaController],
  exports: [],
})
export class PersonaModule {}
