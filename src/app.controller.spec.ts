import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { QuoteService } from './quote/quote.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [QuoteService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello!');
    });
  });

  describe('getQuote', () => {
    it('should return a random quote', () => {
      expect(appController.getQuote()).toMatchObject({ lang: 'en' });
    });
  });
});
