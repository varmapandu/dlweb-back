import * as  mongoose from "mongoose";

export interface ICourse extends mongoose.Document {
    name: string;
    description: string;
    courseType: string;
    views: number;
    share: number;
    rating: number;
    duration: string;
    hours: number
    image: Object;
    coverImage: string;
    coverImageAlt: string;
    video: Object;
    meta: Object;
    pre: Object;
    why: string;
    whyImage: string;
    whyImageAlt: string;
    avgSalary: string;
    careerHead: string;
    careers: Object;
    slug: string;
    position: number;
    curriculum: string;
    like: number;
    isMain: boolean;
    mainCourse: string;
    updateBy: string;
    updateDate: Date;
}
