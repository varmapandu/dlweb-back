import * as  mongoose from "mongoose";

export interface IBlog extends mongoose.Document {
  name: string;
  description: string;
  author: string;
  getBy: string;
  share: number;
  like: number;
  domain: string;
  image:string;
  imageAlt: string;
  video:string;
  videoAlt: string;
  intro: Object;
  qa: Object;
  advantage: Object;
  date: Date;
  updateDate: Date;
  updateBy: String;
}
