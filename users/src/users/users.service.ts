import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from 'src/dto/register-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User> ) {}

    getAll() {
        return this.userModel.find()
    }

    async getById(id: string) {
        return this.userModel.findById(id);
    }

    async create(registerUser: RegisterUserDto) {
        const newUser = new this.userModel(registerUser);
        return newUser.save()
    }

    async delete(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }

    async update(id: string, body: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, body, {new: true});
    }
}
