import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSchema } from 'src/schemas/language.schema';
import { LanguageController } from './language.controller';
import { EncryptionService } from 'src/encryption/encrytption.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Language', schema: LanguageSchema }])],
  providers: [LanguageService, EncryptionService],
  controllers: [LanguageController]

})
export class LanguageModule { }
