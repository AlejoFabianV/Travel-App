import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Reserve {

    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        type: String,
        required: true,
    })
    destiny: string;

    @Prop({
        type: String,
        required: true,
    })
    transport: string;

    @Prop({
        type: Date,
        default: Date.now
    })
    reserve_date: Date;
}

export const ReserveShcema = SchemaFactory.createForClass(Reserve);