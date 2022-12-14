import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Anuncio } from './src/anuncios/entities/anuncio.entity';
import { Imagem } from './src/imagens/entities/imagen.entity';
import { User } from './src/users/entities/user.entity';
import { Endereco } from './src/enderecos/entities/endereco.entity';
config();

export const AppDataSource =
  process.env.NODE_ENV == 'test'
    ? new DataSource({
        type: 'sqlite',
        database: 'test.sqlite',
        entities: [Anuncio, Imagem, User, Endereco],
        migrations: ['dist/src/migrations/*.js'],
        migrationsTableName: 'migrations',
        synchronize: true,
        migrationsRun: false,
        dropSchema: false,
      })
    : new DataSource({
        type: 'postgres',
        url:
          process.env.NODE_ENV == 'production' ||
          process.env.NODE_ENV == 'migration'
            ? process.env.DATABASE_URL
            : process.env.DATABASE_TEST,
        entities: [Anuncio, Imagem, User, Endereco],
        migrations: ['dist/src/migrations/*.js'],
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : false,
        synchronize: process.env.NODE_ENV == 'production' ? false : true,
        logging: true,
        migrationsRun: false,
        dropSchema: false,
      });
