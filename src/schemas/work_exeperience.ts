import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date } from "mongoose";
import { Users } from "./user.schema";

@Schema({
    timestamps: true
})

export class WorkExperience {

    @Prop()
    company: string

    @Prop()
    designation: string

    @Prop()
    from_date: string

    @Prop()
    end_date: string

    @Prop()
    created_at: Date

    @Prop()
    updated_at: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: Users;

}

export const WorkExeperinceSchema = SchemaFactory.createForClass(WorkExperience);
