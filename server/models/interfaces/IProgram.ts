import * as  mongoose from "mongoose";

export interface IProgram extends mongoose.Document {
    name: string;
    description: string;
    programType: string;
    views: number;
    share: number;
    rating: number;
    like: number;
    duration: string;
    hours: number
    coverImage: string;
    coverImageAlt: string;
    what: string;
    whatImage: string;
    whatImageAlt: string;
    avgSalary: string;
    techStack: Object;
    techCovered: Object;
    biggest: Object;
    projects: Object;
    slug: string;
    position: number;
    curriculum: string;
    updateBy: string;
    updateDate: Date;
}
