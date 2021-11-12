import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { SearchModule } from './modules/search/search.module';
import { EventsModule } from './modules/events/events.module';

const routers: Routes = [
    {
        path: 'search',
        module: SearchModule,
    },
];

@Module({
    imports: [
        RouterModule.register(routers),
        EventsModule,
    ],
    exports: [RouterModule],
})
export class AppRouterModule { }
