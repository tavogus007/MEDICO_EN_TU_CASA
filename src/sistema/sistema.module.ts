import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiisWeb } from './entities/siis.entity';
import { Igob } from './entities/igob.entity';
import { SiisService } from './services/siis.service';
import { SiisController } from './controllers/siis.controller';
import { IgobController } from './controllers/igob.controller';
import { IgobService } from './services/igob.service';

@Module({
  imports: [TypeOrmModule.forFeature([SiisWeb, Igob])],
  providers: [SiisService, IgobService],
  controllers: [SiisController, IgobController],
  exports: [TypeOrmModule, IgobService, SiisService],
})
export class SistemaModule {}
