import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema({
    timestamps: true
})

export class Language {
    @Prop()
    language_name: string

    @Prop()
    created_at: Date

    @Prop()
    updated_at: Date
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
