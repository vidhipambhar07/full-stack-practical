import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExperienceService } from './technical-experience.service';

describe('TechnicalExperienceService', () => {
  let service: TechnicalExperienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalExperienceService],
    }).compile();

    service = module.get<TechnicalExperienceService>(TechnicalExperienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
