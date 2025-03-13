import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { ConfigurablesModule } from './configurables/configurables.module'; // Ensure this path is correct or create the module if it does not exist
import { AgendaController } from './controllers/mec_agenda/agenda/agenda.controller';
import { FormularioController } from './controllers/mec_agenda/formulario/formulario.controller';
import { HistorialController } from './controllers/mec_historial/historial.controller';
//import { AgendaService } from './services/agenda.service';
import { RutaService } from './services/ruta.service';
import { HistorialService } from './services/historial.service';
import { AgendaModule } from './controllers/mec_agenda/agenda/agenda.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { Agenda } from './entities/agenda.entity';
import { RutaController } from './controllers/mec_ruta/ruta.controller';
import { AuthModule } from './controllers/auth/auth.module';
import { AppAuthService } from './services/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo esté disponible en toda la aplicación
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        schema: 'medico_en_tu_casa',
        entities: [
          Agenda
        ],
        synchronize: false, // solo en modo desarrollo
      }),
    }),
    AgendaModule,
    AuthModule,
    //ConfigurablesModule,
  ],
  controllers: [
    AppController,
    //AgendaController,
    FormularioController,
    HistorialController,
    RutaController
  ],
  providers: [AppService, RutaService, HistorialService, AppAuthService],
})
export class AppModule {}
