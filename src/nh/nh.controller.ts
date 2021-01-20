import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { NhService } from './nh.service';

@Controller('nh')
export class NhController {
  constructor(private readonly service: NhService) {}

  @Get('g/:id')
  getGallery(@Param('id', ParseIntPipe) id: number): any {
    return this.service.gallery(id);
  }
}
