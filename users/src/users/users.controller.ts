import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from 'src/dto/register-user.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @EventPattern('Reserve')
    async handleOrderCreated(data: Record<string, unknown>) {
        console.log('User created reserve', data)
    }

    @Get()
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get(':id')
    getUsersById(@Param('id') id: string) {
        return this.userService.getById(id);
    }

    @Post()
    createUser(@Body() body: RegisterUserDto) {
        return this.userService.create(body);
    }

    @Delete(':id')
    deleteUsersById(@Param('id') id: string ) {
        return this.userService.delete(id);
    }

    @Put(':id')
    async updateUser(@Param('id') userId: string, @Body() body: any) {
        return await this.userService.update(userId, body);
    }
}
