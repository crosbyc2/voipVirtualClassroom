import { createConnection } from 'typeorm';

export const databaseProviders = [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: async () =>
            await createConnection({
              type: 'mysql',
              host: 's.pedromoter.com',
              port: 3306,
              username: process.env.dbuser,
              password: process.env.dbpass,
              database: 'witvoip',
              entities: ['dist/**/*.entity.js'],
              synchronize: true,
              name: 'testConnectionName',
            }),
        },
      ];

export const testDatabaseProvider = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () =>
        await createConnection({
          type: 'sqlite',
          database: ':memory:',
          dropSchema: true,
          entities: ['dist/**/*.entity.js'],
          synchronize: true,
          logging: false,
          name: 'testConnectionName',
        }),
    },
  ];
