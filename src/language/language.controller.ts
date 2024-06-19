import { Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language } from 'src/schemas/language.schema';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
    constructor(
        private readonly languageService: LanguageService,) { }

    @Post()
    async addLanguage() {
        return await this.languageService.addLanguage()
    }
}
