import { Injectable } from '@nestjs/common';
import { UserModule } from './user.module';
import { CreateUserDto } from './dto/user.dto';
import { Users } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    // constructor(@InjectModel(Users.name) private readonly userModel: Model<UserModule>) { }

    // async createUsers(body: CreateUserDto) {
    //     const users = await this.userModel.insertMany([{
    //         ...body
    //     }])
    //     return users;
    // }
}
