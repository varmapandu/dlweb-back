import * as  mongoose from "mongoose";

export interface IBatch extends mongoose.Document {
  name: string;
  startDate: string;
  type: string;
  status: string;
  time: string;
  seats: number;
  branch: string;
  country: string;
  course: string;
  updateDate: Date;
  updateBy: String;
}
