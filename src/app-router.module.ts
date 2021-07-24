import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { SearchModule } from './modules/search/search.module';

const routers: Routes = [
    {
        path: 'search',
        module: SearchModule,
    },
];

@Module({
    imports: [
        RouterModule.register(routers),
    ],
    exports: [RouterModule],
})
export class AppRouterModule { }
