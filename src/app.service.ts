import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quotes, QuotesDocument } from './app.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Quotes.name) private quoteModel: Model<QuotesDocument>,
  ) {}

  async addQuote(quote: string) {
    const quoteRecord = await this.quoteModel.create({
      quote,
      createdAt: new Date()
    });

    return quoteRecord;
  }
}
