import { Module } from '@nestjs/common';
import { NhService } from './nh.service';
import { NhController } from './nh.controller';

@Module({
  providers: [NhService],
  controllers: [NhController]
})
export class NhModule {}
