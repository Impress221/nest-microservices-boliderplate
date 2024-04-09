import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';
import { USERS_SERVICE } from './consts';
import { HelloService } from './services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api/.env'
    }),
    RmqModule.register({
      name: USERS_SERVICE
    })
  ],
  controllers: [ApiController],
  providers: [
    HelloService
  ]
})
export class ApiModule {}
