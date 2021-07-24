import { Controller, Get } from '@nestjs/common';

@Controller('main')
export class MainController {

    @Get()
    public getHello(): string {
        return 'Wellcom';
    }
}
