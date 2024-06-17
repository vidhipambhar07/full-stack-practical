import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Education } from "./eduction.schema";
import { WorkExperience } from "./work_exeperience";
import { TechnicalExperience } from "./technical_exeperince";
import { KnownLanguages } from "./known_languages";

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

    @Prop()
    education_detail: [Education]

    @Prop()
    work_exeperience: [WorkExperience]

    @Prop()
    technical_exeperinence: [TechnicalExperience]

    @Prop()
    known_language: [KnownLanguages]

    @Prop({ type: Date }) 
    created_at: Date;

    @Prop({ type: Date })
    updated_at: Date
}

export const UserSchema = SchemaFactory.createForClass(Users);
