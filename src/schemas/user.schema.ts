import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})

export class Users {

    @Prop()
    name: string

    @Prop()
    password: string

    @Prop()
    email: string

    @Prop()
    address: string

    @Prop()
    gender: string

    @Prop()
    contact: string
}

export const UserSchema = SchemaFactory.createForClass(Users);
