import {DataAccess} from "./../../config/DataAccess";
import {ICourse} from "./../interfaces/ICourse";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CourseSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true,
                unique: true
            },
            description: {
                type: String
            },
            courseType: {
                type: String
            },
            views: {
                type: Number
            },
            share: {
                type: Number
            },
            rating: {
                type: Number
            },
            duration: {
                type: String
            },
            hours: {
                type: Number
            },
            why: {
                type: String
            },
            whyImage: {
                type: String
            },
            whyImageAlt: {
                type: String
            },
            avgSalary: {
                type: Number
            },
            careerHead: {
                type: String
            },
            careers: [
                {
                  type: String  
                }
            ],
            courseImage: {
                type: String
            },
            courseImageAlt: {
                type: String
            },
            pre: [
                {
                  type: String  
                }
            ],
            position: {
                type: Number,
                unique: true
            },
            curriculum: {
                type: String
            },
            like: {
                type: Number
            },
            isMain: {
                type: Boolean
            },
            mainCourse: {
                type: String
            },
            updateBy: {
                type: String
            },
            updateDate: {
                type: Date
            }
        });
        return schema;
    }

}
let Course = mongooseConnection.model < ICourse > ("Course", CourseSchema.schema);
export {Course};
