import { Inject, Injectable } from '@nestjs/common';
import { USERS_SERVICE } from '../consts';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class HelloService {
  constructor(
    @Inject(USERS_SERVICE)
    private readonly usersClient: ClientProxy,
  ) {}

  async sayHello() {
    const asd = await lastValueFrom(
      this.usersClient.send('authorize', {
        somedata: 1,
      }),
    );
    console.log('result', asd);
  }
}
