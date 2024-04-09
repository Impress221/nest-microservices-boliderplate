import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @EventPattern('authorize')
  async authorize(
    @Payload()
    data: any,
    @Ctx()
    context: RmqContext,
  ) {
    this.rmqService.ack(context);

    return 'qwewqq';
  }
}
