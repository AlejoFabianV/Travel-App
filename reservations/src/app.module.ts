import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReservationsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/reservesDB')
  ],
})
export class AppModule {}
