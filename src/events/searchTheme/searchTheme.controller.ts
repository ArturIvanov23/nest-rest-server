import { Controller, Get } from '@nestjs/common';
import { EventsService } from '../events.service';
@Controller('searchTheme')
export class searchThemeController {
  constructor(private readonly eventService: EventsService) {}
  @Get()
  searchEvent() {
    return this.eventService.getEvents();
  }
}
