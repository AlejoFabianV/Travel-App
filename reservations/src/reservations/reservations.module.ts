import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Reserve, ReserveShcema } from 'src/schemas/reserves.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reserve.name,
        schema: ReserveShcema
      }
    ]),
    ClientsModule.register([
      {
        name: 'Reserve',
        transport: Transport.TCP,
        options: {
          port: 4000,
        }
      }
    ])
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService]
})
export class ReservationsModule {}
