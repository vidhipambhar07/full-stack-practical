import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageController } from './language/language.controller';
import { LanguageModule } from './language/language.module';
import { AdminModule } from './admin/admin.module';
import { EncryptionService } from './encryption/encrytption.service';


@Module({
  controllers: [AppController, LanguageController],
  providers: [AppService, EncryptionService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule, LanguageModule, AdminModule],
})
export class AppModule { }
