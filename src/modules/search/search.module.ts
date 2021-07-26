import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MainController } from './controllers/main.controller';

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [
        MainController,
    ],
    providers: [],
})

export class SearchModule { }
