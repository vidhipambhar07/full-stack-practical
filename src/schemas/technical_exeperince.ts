import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date } from "mongoose";
import { Users } from "./user.schema";

@Schema({
    timestamps: true
})

export class TechnicalExperience {

    @Prop()
    tech_name: string

    //0: beginner
    //1: mediator
    //2: expert
    @Prop()
    exeperience_level: number


    @Prop({ type: Date }) // Explicitly define type as Date
    created_at: Date;

    @Prop({ type: Date }) 
    updated_at: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: Users;

}

export const TechnicalExeperienceSchema = SchemaFactory.createForClass(TechnicalExperience);
