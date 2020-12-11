import { Body, Controller, Post } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { Events } from '../schemas/events.schema'
import { EventsService } from '../events.service';

@Controller('sendEvent')
export class sendEventController {
  constructor(
    private readonly eventService: EventsService,
  ) {}

  @Post()
  sendEvent(@Body() eventDto: EventDto): Promise<Events> {
    console.log(this.eventService.create(eventDto));
    return this.eventService.create(eventDto);
  }
}
