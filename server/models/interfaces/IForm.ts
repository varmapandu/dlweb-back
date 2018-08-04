import * as  mongoose from "mongoose";

export interface IForm extends mongoose.Document {
  name: string;
  dob: string;
  mobile:number;
  email: string;
  address: string;
  college: string;
  courseInterested: string;
  qualification: string;
  specialization: string;
}
