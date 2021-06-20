import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResResponse } from './models/res-response.model';

@Controller()
export class AppController {
    public constructor(private readonly appService: AppService) { }

    @Get()
    public getHello(): ResResponse<string> {
        return this.appService.getHello();
    }
}
