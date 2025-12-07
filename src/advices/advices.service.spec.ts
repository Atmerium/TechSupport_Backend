import { Test, TestingModule } from '@nestjs/testing';
import { AdvicesService } from './advices.service';

describe('AdvicesService', () => {
  let service: AdvicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvicesService],
    }).compile();

    service = module.get<AdvicesService>(AdvicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
