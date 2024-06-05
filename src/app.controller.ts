import { Controller, Get } from '@nestjs/common';
import { MathService } from './math.service';
// src/app.controller.ts
@Controller()
export class AppController {
constructor(private readonly mathService: MathService) {}

@Get('hello')
getHello(): string {
  this.mathService.add(2,3);
return 'Hello, NestJS!';
}
}

/*import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
*/