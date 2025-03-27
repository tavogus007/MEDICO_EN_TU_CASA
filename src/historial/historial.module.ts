import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historial } from './entities/historial.entity';
import { HistorialService } from './services/historial.service';
import { HistorialController } from './controllers/historial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Historial])],
  providers: [HistorialService],
  controllers: [HistorialController],
  exports: [TypeOrmModule], // Esto permite que otros módulos usen esta entidad
})
export class HistorialModule {}
