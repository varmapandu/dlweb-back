import { BaseDAO } from "./../config/BaseDAO";
import {ISubCourse} from "./../models/interfaces/ISubCourse";
import {SubCourse} from "./../models/schemas/SubCourse";

export class SubCourseDAO  extends BaseDAO<ISubCourse> {
    constructor () {
        super(SubCourse);
    }

    find(data){
        return super.find(data, "-_id name image imageAlt position description");
    }
}

Object.seal(SubCourseDAO);
