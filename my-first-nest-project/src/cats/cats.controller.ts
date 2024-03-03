import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    @Post()
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat.'
    }
}
