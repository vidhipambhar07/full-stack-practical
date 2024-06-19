import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from 'src/schemas/admin.schema';
import { AdminModule } from './admin.module';
import { EncryptionService } from 'src/encryption/encrytption.service';
import { JwtPayload, LoginDto } from 'src/users/dto/user.dto';
import bcryptjs from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin.name) private readonly adminModel: Model<AdminModule>,
        private readonly secureServcie: EncryptionService,
        private jwtService: JwtService

    ) { }
    async createAdmin(): Promise<Admin> {

        const newAdmin = new this.adminModel({
            username: 'admin',
            password: 123,
            created_at: Date.now(),
            updated_at: Date.now(),
        });
        const createdAdmin = await newAdmin.save();
        return createdAdmin.toObject();
    }


    async loginAdmin(credential: LoginDto) {
        const { username, password } = credential;
        const user = await this.adminModel.findOne({ username })
        console.log('user: ', user);
        if (!user) {
            throw new UnauthorizedException('Wrong creds')
        }
        const payload = {
            id: user._id,
            username: username
        }

        const token = this.generateUserToken(payload)
        const responseData = {
            id: user.id,
            role: "admin",
            accessToken: token,

        };
        return responseData

    }

    generateUserToken(payload: any) {
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '3d',
        });
    }
}

