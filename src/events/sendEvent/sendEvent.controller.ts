import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../../app.service';
import { EventDto } from './dto/event.dto';
import { Events } from '../schemas/events.schema'
import { EventsService } from '../events.service';

@Controller('sendEvent')
export class sendEventController {
  constructor(
    private readonly eventService: EventsService,
  ) {}

  @Post()
  create(@Body() eventDto: EventDto): Promise<Events> {
    console.log(this.eventService.create(eventDto));
    return this.eventService.create(eventDto);
  }
}
