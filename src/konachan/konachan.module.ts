import { Module } from '@nestjs/common';
import { KonachanService } from './konachan.service';
import { KonachanController } from './konachan.controller';

@Module({
  providers: [KonachanService],
  controllers: [KonachanController]
})
export class KonachanModule {}
