import { Injectable } from '@nestjs/common';
import { ResResponse } from './models/res-response.model';

@Injectable()
export class AppService {
    public getHello(): ResResponse<string> {
        return { count: 0, items: ['hello'], limit: 10, offset: 1 };
    }
}
