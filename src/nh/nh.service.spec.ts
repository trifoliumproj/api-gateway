import { Test, TestingModule } from '@nestjs/testing';
import { NhService } from './nh.service';

describe('NhService', () => {
  let service: NhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NhService],
    }).compile();

    service = module.get<NhService>(NhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
