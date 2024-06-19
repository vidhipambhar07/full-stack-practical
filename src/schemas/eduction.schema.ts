import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Users } from "./user.schema";

@Schema({
    timestamps: true
})


export class Education {

    @Prop()
    course: string

    @Prop()
    percentage: string

    @Prop()
    year: string

    @Prop()
    unversity: string

    @Prop({ type: Date }) 
    created_at: Date;

    @Prop({ type: Date }) 
    updated_at: Date

}

export const EducationSchema = SchemaFactory.createForClass(Education);
