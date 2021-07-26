import { Module } from '@nestjs/common';
import { AppRouterModule } from './app-router.module';
import { AppController } from './app.controller';
import { SearchModule } from './modules/search/search.module';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        SearchModule,
        AppRouterModule,
        HttpModule,
    ],
    controllers: [
        AppController,
    ],
})
export class AppModule { }
