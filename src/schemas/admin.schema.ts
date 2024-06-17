import { Prop, Schema } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema({
    timestamps: true
})

export class Admin {
    @Prop()
    username: string

    @Prop()
    password: string

    @Prop()
    created_at: Date

    @Prop()
    updated_at: Date
}