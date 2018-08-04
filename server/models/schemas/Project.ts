import {DataAccess} from "./../../config/DataAccess";
import {IProject} from "./../interfaces/IProject";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProjectSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
            },
            description: {
                type: String
            },
            image: {
                type: String
            },
            imageAlt: {
                type: String
            },
            getBy:{
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
var Project = mongooseConnection.model < IProject > ("Project", ProjectSchema.schema);
export {Project};
