import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agenda } from './entities/agenda.entity';
import { AgendaService } from './services/agenda.service';
import { AgendaController } from './controllers/agenda.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agenda])],
  providers: [AgendaService],
  controllers: [AgendaController],
  exports: [], //*
})
export class AgendaModule {}
