import { HttpService } from '@nestjs/axios';
import { Controller, Get, Query } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { SearchResult } from 'src/models/search-result.model';

@Controller('main')
export class MainController {

    public constructor(
        private http: HttpService,
    ) { }

    @Get()
    public async getHello(@Query() request: { keyWord?: string }): Promise<SearchResult> {
        return (await lastValueFrom(this.http.get(`https://www.ximalaya.com/revision/search/main?core=all&kw=${encodeURI(request.keyWord) || ''}&spellchecker=true&device=iPhone&live=true`))).data;
    }
}
