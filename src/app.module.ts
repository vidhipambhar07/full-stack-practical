import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { EductionService } from './eduction/eduction.service';
import { EductionModule } from './eduction/eduction.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin/admin.module';
import { AdminModule } from './admin/admin.module';
import { LanguageController } from './language/language.controller';
import { LanguageModule } from './language/language.module';
import { WorkExperienceService } from './work-experience/work-experience.service';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { TechnicalExperienceController } from './technical-experience/technical-experience.controller';
import { TechnicalExperienceModule } from './technical-experience/technical-experience.module';

@Module({
  controllers: [AppController, LanguageController, TechnicalExperienceController],
  providers: [AppService, EductionService, WorkExperienceService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule, EductionModule, AdminModule, LanguageModule, WorkExperienceModule, TechnicalExperienceModule],
})
export class AppModule { }
