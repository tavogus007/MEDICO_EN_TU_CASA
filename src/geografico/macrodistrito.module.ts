import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MacrodistritoService } from './services/macrodistrito.service';
import { MacrodistritoController } from './controllers/macrodistrito.controller';
import { Macrodistrito } from './entities/macrodistrito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Macrodistrito])],
  providers: [MacrodistritoService],
  controllers: [MacrodistritoController],
  exports: [],
})
export class MacrodistritoModule {}
