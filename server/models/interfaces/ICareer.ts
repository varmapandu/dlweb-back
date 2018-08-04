import * as  mongoose from "mongoose";

export interface ICareer extends mongoose.Document {
  name: string;
  role: string;
  getBy: string;
  updateDate: Date;
  updateBy: String;
}
