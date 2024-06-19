import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { LanguageSchema } from 'src/schemas/language.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
  MongooseModule.forFeature([{ name: 'Languages', schema: LanguageSchema }])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
