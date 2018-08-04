import * as  mongoose from "mongoose";

export interface IProject extends mongoose.Document {
  name: string;
  description: string;
  image:string;
  imageAlt: string;
  getBy: string;
  updateDate: Date;
  updateBy: String;
}
