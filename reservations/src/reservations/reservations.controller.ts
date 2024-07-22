import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReserveDto } from 'src/dto/create-reserve.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('reservations')
export class ReservationsController {
    constructor(
        private readonly reservationsService: ReservationsService,
        @Inject('Reserve') private readonly client: ClientProxy,
    ) { }

    @Get()
    getAllReserves() {
        return this.reservationsService.getAll();
    }

    @Get(':id')
    getReserveById(@Param('id') id: string) {
        return this.reservationsService.getById(id);
    }

    @Post()
    createReserve(@Body() body: CreateReserveDto) {
        this.client.emit('Reserve', body);
        return this.reservationsService.create(body);
    }

    @Delete(':id')
    deleteReserveById(@Param('id') id: string) {
        return this.reservationsService.delete(id);
    }

    @Put(':id')
    updateReserve(@Param('id') reserveId: string, @Body() body: any) {
        return this.reservationsService.update(reserveId, body);
    }
}
