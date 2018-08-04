import { BaseDAO } from "./../config/BaseDAO";
import { ICourse } from "./../models/interfaces/ICourse";
import { Course } from "./../models/schemas/Course";

export class CourseDAO extends BaseDAO<ICourse> {
    constructor() {
        super(Course);
    }

    save(item: ICourse) {
        return super.save(item);
    }
    
    retrieve(query: object) {
        return super.retrieve(query);
    }

    allCoursesPage(){
            return super.find({isMain:true}, "_id name description views share rating slug courseImage courseImageAlt").sort({position:1});
    }

    list(){
        return super.find({isMain:true}, "_id name slug").sort({position:1});
    }

}

Object.seal(CourseDAO);
