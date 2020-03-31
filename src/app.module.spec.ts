import { TestingModule, Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { testDatabaseProvider } from './db';
import { roomProvider } from './entities/room.entity';
import { memberProvider } from './entities/member.entity';
import { getConnection } from 'typeorm';

describe('appServiceTest', async () => {
    let module: TestingModule;
    let appService: AppService;

    beforeAll(async () => {
        module = await Test.createTestingModule({
          providers: [
            AppService,
            ...testDatabaseProvider,
            ...roomProvider,
            ...memberProvider,
          ],
        }).compile();

        appService = module.get(AppService);

});

    afterAll(async () => {
    await getConnection('testConnectionName').close();
  });

    it('should be defined', () => {
    expect(appService).toBeDefined();
  });

    it('should send email', () => {
    appService.sendEmailInvite('pedromoter@me.com', 'Here is the link: https://google.com');
  });
});
