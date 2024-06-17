import { Module } from '@nestjs/common';
import { TechnicalExperienceService } from './technical-experience.service';

@Module({
  providers: [TechnicalExperienceService]
})
export class TechnicalExperienceModule {}
