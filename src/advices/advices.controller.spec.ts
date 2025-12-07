import { Test, TestingModule } from '@nestjs/testing';
import { AdvicesController } from './advices.controller';
import { AdvicesService } from './advices.service';

describe('AdvicesController', () => {
  let controller: AdvicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvicesController],
      providers: [AdvicesService],
    }).compile();

    controller = module.get<AdvicesController>(AdvicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
