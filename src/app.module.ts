import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { roomProvider } from './entities/room.entity';
import { memberProvider } from './entities/member.entity';
import { databaseProviders } from './db';
import { TwillioModule } from './twillio/twillio.module';

@Module({
  imports: [TwillioModule],
  controllers: [AppController],
  providers: [AppService,
...databaseProviders,
...roomProvider,
...memberProvider],
})
export class AppModule {}
