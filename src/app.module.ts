import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NhModule } from './nh/nh.module';

@Module({
  imports: [NhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
