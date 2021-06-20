import { Injectable } from '@nestjs/common';
import { ResResponse } from './models/res-response.model';

@Injectable()
export class AppService {
    public getHello<T>(req: T): ResResponse<T> {
        return { count: 0, items: [req], limit: 10, offset: 1 };
    }
}
