import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuoteService } from './quote/quote.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [QuoteService],
})
export class AppModule {}
