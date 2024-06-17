import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from 'src/schemas/admin.schema';
import { EncryptionService } from 'src/encryption/encrytption.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }])],
  providers: [AdminService, EncryptionService],
  controllers: [AdminController]
})
export class AdminModule { }
