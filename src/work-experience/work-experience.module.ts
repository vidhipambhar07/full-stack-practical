import { Module } from '@nestjs/common';
import { WorkExperienceController } from './work-experience.controller';

@Module({
  controllers: [WorkExperienceController]
})
export class WorkExperienceModule {}
