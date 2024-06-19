import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language } from 'src/schemas/language.schema';

@Injectable()
export class LanguageService {
    constructor(
        @InjectModel('Language') private readonly languagesModel: Model<Language>,
    ) { }

    //add langauges
    async addLanguage(): Promise<Language[]> {
        const languagesToAdd = [
            { language_name: 'Hindi' },
            { language_name: 'English' },
            { language_name: 'Gujarati' },
        ];

        try {
            const addedLanguages = await this.languagesModel.insertMany(languagesToAdd);
            return addedLanguages;
        } catch (error) {
            throw new Error(`Failed to add languages: ${error.message}`);
        }
    }

}
