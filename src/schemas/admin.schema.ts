import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema({
    timestamps: true
})

export class Admin {
    @Prop()
    username: string

    @Prop()
    password: string

    @Prop({ type: Date }) // Explicitly define type as Date
    created_at: Date;

    @Prop({ type: Date })
    updated_at: Date
}
export const AdminSchema = SchemaFactory.createForClass(Admin);
