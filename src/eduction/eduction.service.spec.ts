import { Test, TestingModule } from '@nestjs/testing';
import { EductionService } from './eduction.service';

describe('EductionService', () => {
  let service: EductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EductionService],
    }).compile();

    service = module.get<EductionService>(EductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
