import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginDto } from 'src/users/dto/user.dto';

@Controller('admin')
// @UseGuards(AuthGuard('jwt'))
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post()
    async createAdmin() {
        return await this.adminService.createAdmin()
    }

    @Post('/login')
    async singUp(@Body() credential: LoginDto) {
        return await this.adminService.loginAdmin(credential)
    }


}
