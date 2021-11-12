import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway()
export class Eventsgateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    public handleEvent(@MessageBody() data: string): Observable<WsResponse<number>> {
        console.log(data);

        const event: string = 'event';
        const response: Array<number> = [1, 2, 3];
        return from(response).pipe(
            map(data => ({ event, data }))
        );
    }

}
