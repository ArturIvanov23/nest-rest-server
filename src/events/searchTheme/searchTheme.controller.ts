import { Controller, Get } from '@nestjs/common';
import { EventsService } from '../events.service';
@Controller('searchTheme')
export class searchThemeController {
  constructor(private readonly eventService: EventsService) {}
  @Get()
  getHello() {
    return this.eventService.getAll();
  }
}
