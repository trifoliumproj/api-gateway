import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NhModule } from './nh/nh.module';
import { KonachanModule } from './konachan/konachan.module';

@Module({
  imports: [NhModule, KonachanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
