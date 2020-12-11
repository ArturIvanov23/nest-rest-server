import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsService } from './events/events.service';
import { sendEventController } from './events/sendEvent/sendEvent.controller';
import { searchThemeController } from './events/searchTheme/searchTheme.controller';
import { Events, EventSchema } from './events/schemas/events.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://art:1234@cluster0.cuk24.mongodb.net/events?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: Events.name, schema: EventSchema },
  ])],
  controllers: [AppController, sendEventController, searchThemeController],
  providers: [AppService, EventsService],
})
export class AppModule {}
