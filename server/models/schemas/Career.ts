import {DataAccess} from "./../../config/DataAccess";
import {ICareer} from "./../interfaces/ICareer";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CareerSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true,
                unique: true
            },
            role: {
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
var Career = mongooseConnection.model < ICareer > ("Career", CareerSchema.schema);
export {Career};
