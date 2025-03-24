import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { AuthModule } from './auth/auth.module';
import { AgendaModule } from './agenda/agenda.module';
import { Agenda } from './agenda/entities/agenda.entity';
import { FormDiagnostico } from './agenda/entities/formulario.entity';
import { AdmisionTrabSocModule } from './adm_ts/admision_trab-soc.module';
import { Admisiones } from './adm_ts/entities/admisiones.entity';
import { TrabajoSocial } from './adm_ts/entities/trabajoSoclal.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, // Hace que el módulo esté disponible en toda la aplicación
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
          isGlobal: true,
          validationSchema: Joi.object({
            DB_HOST: Joi.string().required(),
            DB_PORT: Joi.number().required(),
            DB_USERNAME: Joi.string().required(),
            DB_PASSWORD: Joi.string().required(),
            DB_DATABASE: Joi.string().required(),
          }),
        }),
      ],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        schema: 'medico_en_tu_casa',
        entities: [Agenda, FormDiagnostico, Admisiones, TrabajoSocial],
        synchronize: false, // solo en modo desarrollo
      }),
    }),
    AgendaModule,
    AuthModule,
    AdmisionTrabSocModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
