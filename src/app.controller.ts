import { Controller, Get, Query } from '@nestjs/common';
import { QuoteService } from './quote/quote.service';
import { Quote } from './quote';

@Controller()
export class AppController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('/quote/random')
  getQuote(@Query('lang') lang = 'en'): Quote {
    return this.quoteService.pickOneByLang(lang);
  }
}
