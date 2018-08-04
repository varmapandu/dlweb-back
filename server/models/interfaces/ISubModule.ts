import * as  mongoose from "mongoose";

export interface ISubModule extends mongoose.Document {
  name: string;
  description: string;
  moduleImage: string;
  moduleImageAlt: string;
  getBy: string;
  position: number;
  updateDate: Date;
  updateBy: String;
}
