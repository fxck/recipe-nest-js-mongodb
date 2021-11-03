import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuotesDocument = Quotes & Document;

@Schema()
export class Quotes {
  @Prop()
  quote: string;
  @Prop()
  createdAt: Date;
}

export const QuotesSchema = SchemaFactory.createForClass(Quotes);
