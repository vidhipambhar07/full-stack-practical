import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageController } from './language/language.controller';
import { LanguageModule } from './language/language.module';
import { AdminModule } from './admin/admin.module';
import { EncryptionService } from './encryption/encrytption.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthMiddleware } from './middleware/auth.middleware';


@Module({
  controllers: [AppController],
  providers: [AppService, EncryptionService
  ],
  imports: [

    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    JwtModule.register({ global: true, secret: process.env.JWT_SECRET }),

    UserModule, LanguageModule, AdminModule],
})

// export class AppModule { }
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'admin', method: RequestMethod.POST },
        { path: 'user/add', method: RequestMethod.POST },
        'admin/(.*)',
      )
      .forRoutes({ path: 'user/(*)', method: RequestMethod.ALL });
  }
}