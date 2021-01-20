import { Test, TestingModule } from '@nestjs/testing';
import { NhController } from './nh.controller';

describe('NhController', () => {
  let controller: NhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NhController],
    }).compile();

    controller = module.get<NhController>(NhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
