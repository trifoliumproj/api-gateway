import { Controller, Post, Body, ParseArrayPipe } from '@nestjs/common';
import { KonachanService } from './konachan.service';

@Controller('konachan')
export class KonachanController {
  constructor(private readonly konachanService: KonachanService) {}

  @Post('posts')
  gallery(@Body('tags', ParseArrayPipe) tags: string[]): any {
    return this.konachanService.gallery(tags);
  }
}
