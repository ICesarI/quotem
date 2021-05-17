import { Quote } from '../quote';
import { Injectable } from '@nestjs/common';

const preloadedQuotes: Quote[] = [
  {
    content: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
    lang: 'en'
  },
  {
    content: 'No hay que ir para atrás ni para darse impulso.',
    author: 'Lao Tsé',
    lang: 'es'
  },
  {
    content: 'Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera.',
    author: 'Albert Einstein',
    lang: 'es'
  },
  {
    content: 'Uno es dueño de lo que calla y esclavo de lo que habla',
    author: 'Sigmund Freud',
    lang: 'es'
  },
  {
    content: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
    author: 'J.K. Rowling',
    lang: 'en'
  }
];

@Injectable()
export class QuoteService {
  private readonly quotes = preloadedQuotes;

  create(quote: Quote) {
    this.quotes.push(quote);
  }

  pickOneByLang(lang): Quote {
    const quotesByLang = this.quotes.filter(quote => quote.lang === lang);
    const count = quotesByLang.length;
    const randomId = Math.floor(Math.random() * count);
    return quotesByLang[randomId];
  }
}
