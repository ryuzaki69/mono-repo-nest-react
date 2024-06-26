import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    return this.appService.get();
  }

  @Post()
  post() {
    return this.appService.post();
  }
}
