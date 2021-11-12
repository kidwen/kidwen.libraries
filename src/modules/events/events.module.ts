import { Module } from '@nestjs/common';
import { Eventsgateway } from './gateway/event.gateway';

@Module({
    providers: [Eventsgateway],
})
export class EventsModule { }
