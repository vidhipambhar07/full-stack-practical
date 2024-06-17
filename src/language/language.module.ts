import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSchema } from 'src/schemas/language.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Language', schema: LanguageSchema }])],
  providers: [LanguageService]
})
export class LanguageModule {}
