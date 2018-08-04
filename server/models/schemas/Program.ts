import {DataAccess} from "./../../config/DataAccess";
import {IProgram} from "./../interfaces/IProgram";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProgramSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            programType: {
                type: String
            },
            views: {
                type: Number
            },
            share: {
                type: Number
            },
            like: {
                type: Number
            },
            coverImage: {
                type: String
            },
            coverImageAlt: {
                type: String
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
            what: {
                type: String
            },
            whatImage: {
                type: String
            },
            whatImageAlt: {
                type: String
            },
            avgSalary: {
                type: Number
            },
            techStack: [
                {
                  type: String  
                }
            ],
            biggest: [{
                name:{
                    type: String
                },
                url:{
                    type: String
                },
                alt:{
                    type: String
                }
            }],
            techCovered:[{
                name:{
                    type: String
                },
                description:{
                    type: String
                },
                image:{
                    type: String
                },
                imageAlt:{
                    type: String
                }
            }],
            projects: [{
                name:{
                    type: String
                },
                description:{
                    type: String
                },
                image:{
                    type: String
                },
                imageAlt:{
                    type: String
                }
            }
            ],
            position: {
                type: Number
            },
            curriculum: {
                type: String
            },
            slug:{
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
let Program = mongooseConnection.model < IProgram > ("Program", ProgramSchema.schema);
export {Program};
