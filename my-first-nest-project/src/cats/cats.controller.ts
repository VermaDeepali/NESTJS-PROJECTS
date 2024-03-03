import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}
