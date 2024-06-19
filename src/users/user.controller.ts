import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, EditUserDto, PaginationDto } from './dto/user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';


@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
@ApiBearerAuth()
    @Post('add')
    async createUser(@Body() userData: CreateUserDto) {
        return await this.userService.createUser(userData)
    }


    @ApiBearerAuth()
    @Get('all')
    async getUsers(@Query() paginationDto: PaginationDto) {
        try {
            return await this.userService.getUsers(paginationDto);
        } catch (error) {
            throw new HttpException('Failed to retrieve users', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/:id')
    async getUserDetail(
        @Param('id') id: string) {
        return await this.userService.getUserDetail(id)
    }

    @Put()
    async updateUser(
        @Body() userData: EditUserDto) {
        return await this.userService.updateUser(userData)
    }

    @Delete('/:id')
    async deleteUser(
        @Param('id') id: string) {
        return await this.userService.deleteUser(id)
    }
}
