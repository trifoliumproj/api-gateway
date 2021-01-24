import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { KonachanService } from './konachan.service';
import { KonachanController } from './konachan.controller';
import { KONACHAN_PACKAGE_NAME } from '../generated/api/konachan';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: KONACHAN_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: KONACHAN_PACKAGE_NAME,
          protoPath: join(__dirname, '../../api/konachan.proto'),
        },
      },
    ]),
  ],
  providers: [KonachanService],
  controllers: [KonachanController],
})
export class KonachanModule {}
