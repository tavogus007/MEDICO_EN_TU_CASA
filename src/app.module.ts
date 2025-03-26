import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { AuthModule } from './auth/auth.module';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities/persona.entity';
import { GeograficoModule } from './geografico/geografico.module';
import { Macrodistrito } from './geografico/entities/macrodistrito.entity';
import { Distrito } from './geografico/entities/distrito.entity';
import { Zona } from './geografico/entities/zona.entity';
import { SistemaModule } from './sistema/sistema.module';
import { SiisWeb } from './sistema/entities/siis.entity';
import { Igob } from './sistema/entities/igob.entity';

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
        entities: [Persona, Macrodistrito, Distrito, Zona, SiisWeb, Igob],
        synchronize: false, // solo en modo desarrollo
      }),
    }),
    AuthModule,
    PersonaModule,
    GeograficoModule,
    SistemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
