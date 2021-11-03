import {
  BadRequestException,
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('quotes')
  addQuote(@Body('quote') quote: string) {
    if (!quote) {
      throw new BadRequestException('Quote must be filled.');
    }

    return this.appService.addQuote(quote);
  }

}
