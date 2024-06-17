import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from 'src/schemas/admin.schema';
import { AdminModule } from './admin.module';
import { EncryptionService } from 'src/encryption/encrytption.service';
@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin.name) private readonly adminModel: Model<AdminModule>,
        private readonly secureServcie: EncryptionService,

    ) { }
    async createAdmin(): Promise<Admin> {
        const newAdmin = new this.adminModel({
            username: 'admin',
            password: this.secureServcie.encrypt('123'),
            created_at: Date.now(),
            updated_at: Date.now(),
        });
        const createdAdmin = await newAdmin.save();
        return createdAdmin.toObject();
    }
}

