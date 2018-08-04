import * as  mongoose from "mongoose";

export interface IEnroll extends mongoose.Document {
  name: string;
  email: string;
  mobile: number;
  sourceOfPage: string;
  ipAddress: string;
  message: string;
  date: Date;
  updateDate: Date;
  updateBy: String;
}
