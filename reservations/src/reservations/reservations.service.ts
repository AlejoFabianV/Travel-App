import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReserveDto } from 'src/dto/create-reserve.dto';
import { Reserve } from 'src/schemas/reserves.schema';

@Injectable()
export class ReservationsService {
    constructor(@InjectModel(Reserve.name) private reserveModel: Model<Reserve>) { }

    getAll() {
        return this.reserveModel.find();
    }

    getById(id: string) {
        return this.reserveModel.findById(id);
    }

    create(createReserve: CreateReserveDto) {
        const newReserve = new this.reserveModel(createReserve);
        return newReserve.save();
    }

    delete(id: string) {
        return this.reserveModel.findByIdAndDelete(id);
    }

    update(id: string, body: any) {
        return this.reserveModel.findByIdAndUpdate(id, body, { new: true });
    }
}
