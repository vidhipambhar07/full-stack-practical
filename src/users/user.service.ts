import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModule } from './user.module';
import { CreateUserDto, EditUserDto, PaginationDto } from './dto/user.dto';
import { Users } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language } from 'src/schemas/language.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<Users>,
        @InjectModel('Languages') private readonly languagesModel: Model<Language>,
    ) { }

    //create user API
    async createUser(userData: CreateUserDto): Promise<Users> {
        for (const language of userData.known_language) {
            const languageExists = await this.languagesModel.exists({ _id: language.language_id });
            if (!languageExists) {
                throw new NotFoundException(`Language with ID ${language.language_id} not found.`);
            }
        }
        const newUser = new this.userModel({
            ...userData
        });
        const createUser = await newUser.save();
        return createUser.toObject();
    }

    //get user detail
    async getUserDetail(id: string): Promise<Users> {
        if (id) {
            const getUsers = await this.userModel.findById(id);
            if (!getUsers) {
                throw new NotFoundException(`User with id ${id} not found.`);
            }
            return getUsers.toObject();
        }

    }

    //get all users API
    async getUsers(paginationDto: PaginationDto = { page: 1, limit: 10 }): Promise<{ users: Users[], total: number }> {
        const { page = 1, limit = 10 } = paginationDto;
        const skip = (page - 1) * limit;

        const [users, total] = await Promise.all([
            this.userModel.find().skip(skip).limit(limit),
            this.userModel.countDocuments(),
        ]);
        return { users, total };
    }



    //update user by id
    async updateUser(userData: EditUserDto): Promise<Users> {
        console.log('id: ', userData._id);
        if (userData._id) {
            const updatedUser = await this.userModel.findByIdAndUpdate(userData._id, userData, { new: true });
            if (!updatedUser) {
                throw new NotFoundException(`User with id ${userData._id} not found.`);
            }
            return updatedUser.toObject();
        }

    }

    //delete user by id
    async deleteUser(id: string): Promise<Users> {
        console.log('id: ', id);
        if (id) {
            const updatedUser = await this.userModel.findByIdAndDelete(id);
            if (!updatedUser) {
                throw new NotFoundException(`User with id ${id} not found.`);
            }
            return updatedUser.toObject();
        }

    }
}

