import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    username: string;

    @Prop({
        type: String,
        required: true,
        trim: true
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);