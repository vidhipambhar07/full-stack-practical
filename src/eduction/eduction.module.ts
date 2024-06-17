import { Module } from '@nestjs/common';
import { EductionController } from './eduction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EducationSchema } from 'src/schemas/eduction.schema';
import { EductionService } from './eduction.service';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Eduction', schema: EducationSchema }])],
  controllers: [EductionController],
  providers: [EductionService]
})
export class EductionModule { }
