import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { roomProvider } from './entities/room.entity';
import { memberProvider } from './entities/member.entity';
import { databaseProviders, testDatabaseProvider } from './db';
import { TwillioModule } from './twillio/twillio.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [TwillioModule, 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    })],
  controllers: [AppController],
  providers: [AppService,
...testDatabaseProvider,
...roomProvider,
...memberProvider],
})
export class AppModule {}
