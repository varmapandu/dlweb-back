import * as  mongoose from "mongoose";

export interface IReview extends mongoose.Document {
  name: string;
  review: Object;
  rating: Number;
  image:string;
  imageAlt: string;
  updateDate: Date;
  updateBy: String;
}
