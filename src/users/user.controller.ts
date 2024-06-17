import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // @Post()
    // async createUsers(body: CreateUserDto) {
    //     return await this.userService.createUsers(body)
    // }
}
