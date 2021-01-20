import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { NhService } from './nh.service';
import { NhController } from './nh.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: '@trifoliumproj/nh',
        transport: Transport.GRPC,
        options: {
          package: 'nhentai',
          protoPath: join(__dirname, '../../api/nhentai.proto'),
        },
      },
    ]),
  ],
  providers: [NhService],
  controllers: [NhController],
})
export class NhModule {}
