import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ResResponse } from './models/res-response.model';

@Controller()
export class AppController {
    public constructor(private readonly appService: AppService) { }

    @Get()
    @HttpCode(200)
    public getHello<T extends { [key: string]: string }>(@Param() req: T): ResResponse<T> {
        return this.appService.getHello<T>(req);
    }
}
