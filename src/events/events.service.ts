import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Events, EventsDocument } from './schemas/events.schema';
import { Model } from 'mongoose';
import { EventDto } from './sendEvent/dto/event.dto';
import { AppModule } from '../app.module';
import { NestFactory } from '@nestjs/core';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Events.name) private eventsModel: Model<EventsDocument>,
  ) {}

  async getEvents(): Promise<Events[]> {
    await NestFactory.create(AppModule, { cors: false });
    return this.eventsModel.find().exec();
  }
  async create(eventDto: EventDto): Promise<Events> {
    await NestFactory.create(AppModule, { cors: false });
    const newEvent = new this.eventsModel(eventDto);
    return newEvent.save();
  }
}
