import * as  mongoose from "mongoose";

export interface IImage extends mongoose.Document {
  url: string;
  alt: string;
  updateDate: Date;
  updateBy: String;
}
