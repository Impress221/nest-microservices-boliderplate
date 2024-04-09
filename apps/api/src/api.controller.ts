import { Controller, Get } from '@nestjs/common';
import { HelloService } from './services';

@Controller()
export class ApiController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  async getHello(): Promise<string> {
    await this.helloService.sayHello();
    return 'asd';
    // return this.apiService.getHello();
  }
}
