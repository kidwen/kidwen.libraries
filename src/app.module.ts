import { Module } from '@nestjs/common';
import { AppRouterModule } from './app-router.module';
import { AppController } from './app.controller';
import { SearchModule } from './modules/search/search.module';

@Module({
    imports: [
        SearchModule,
        AppRouterModule,
    ],
    controllers: [
        AppController,
    ],
})
export class AppModule { }
