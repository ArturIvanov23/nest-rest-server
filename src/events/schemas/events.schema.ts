import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventsDocument = Events & Document;

@Schema()
export class Events {
  @Prop()
  nameSurname: string;

  @Prop()
  department: string;

  @Prop()
  event: string;

  @Prop()
  theme: string;

  @Prop()
  text: string;

  @Prop()
  file: string;

  @Prop()
  date: string;
}

export const EventSchema = SchemaFactory.createForClass(Events);
