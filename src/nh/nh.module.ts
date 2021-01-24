import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { NhService } from './nh.service';
import { NhController } from './nh.controller';
import { join } from 'path';
import { NHENTAI_PACKAGE_NAME } from '../generated/api/nhentai';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NHENTAI_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: NHENTAI_PACKAGE_NAME,
          protoPath: join(__dirname, '../../api/nhentai.proto'),
        },
      },
    ]),
  ],
  providers: [NhService],
  controllers: [NhController],
})
export class NhModule {}
