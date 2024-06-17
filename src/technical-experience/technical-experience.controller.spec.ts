import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalExperienceController } from './technical-experience.controller';

describe('TechnicalExperienceController', () => {
  let controller: TechnicalExperienceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalExperienceController],
    }).compile();

    controller = module.get<TechnicalExperienceController>(TechnicalExperienceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
