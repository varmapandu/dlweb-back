import * as  mongoose from "mongoose";

export interface IPage extends mongoose.Document {
    name: string;
    title: string;
    description: string;
    meta: Object;
    image: Object;
    video: Object;
    slug:string;
    updateBy: string;
    updateDate: Date;
}
