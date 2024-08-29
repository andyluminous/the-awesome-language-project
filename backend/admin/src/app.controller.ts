import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    return 'Test successful';
  }
}
