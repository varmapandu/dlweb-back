import * as  mongoose from "mongoose";

export interface ILogin extends mongoose.Document {
  username: string;
  password: string;
}
