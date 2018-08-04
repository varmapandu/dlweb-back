import * as  mongoose from "mongoose";

export interface IEvent extends mongoose.Document {
  name: string;
  title: string;
  description: string;
  slug: string;
  image:string;
  imageAlt: string;
  location: string;
  address: string;
  eventDate: string;
  timing: string;
  about: Object;
  topics: Object;
  speakers: Object;
  color: string;
  rate: number;
  eventStatus: string;
  date: Date;
  new: boolean;
}
