import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Users } from "./user.schema";


// export interface EductionDetail {
//     board: {
//         type: string,
//         enum: ['SSC', 'HSC', 'granduaction', 'master degree']
//     };
//     year: string;
//     percentage: string;
// }


// export type WorkExeperince = {
//     companyName: string;
//     designation: string;
//     startDate: Date;
//     endDate?: Date;
// };

// export type KnownLanguage = {
//     language: string;
//     proficiency: {
//         type: string,
//         enum: ['read', 'write', 'speake']
//     };
// };
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

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: Users;

  
    @Prop({ type: Date }) // Explicitly define type as Date
    created_at: Date;

    @Prop({ type: Date }) 
    updated_at: Date

}

export const EducationSchema = SchemaFactory.createForClass(Education);
