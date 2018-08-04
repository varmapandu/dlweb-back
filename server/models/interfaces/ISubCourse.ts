import * as  mongoose from "mongoose";

export interface ISubCourse extends mongoose.Document {
  name: string;
  description: string;
  courseImage: string;
  courseImageAlt: string;
  getBy: string;
  position: number;
  updateDate: Date;
  updateBy: String;
}
