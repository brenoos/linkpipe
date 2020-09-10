import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Deal extends Document {
  @Prop()
  _id: string;

  @Prop({ required: true })
  date: Date;

  @Prop()
  total_value: number;
}

export const DealSchema = SchemaFactory.createForClass(Deal);
