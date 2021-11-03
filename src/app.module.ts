import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { QuotesSchema, Quotes } from './app.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.DATABASE_URI,
      {
        dbName: 'quotes',
      },
    ),
    MongooseModule.forFeature([{ name: Quotes.name, schema: QuotesSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
