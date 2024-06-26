import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date } from "mongoose";
import { Language } from "./language.schema";
import { Users } from "./user.schema";

@Schema({
    timestamps: true
})

export class KnownLanguages {

    @Prop()
    Read: boolean

    @Prop()
    write: boolean

    @Prop()
    speake: boolean

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
    language_id: Language;

   
    @Prop({ type: Date })
    created_at: Date;

    @Prop({ type: Date }) 
    updated_at: Date

}

export const KnownLanguageSchema = SchemaFactory.createForClass(KnownLanguages);
