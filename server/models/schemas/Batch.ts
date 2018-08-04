import {DataAccess} from "./../../config/DataAccess";
import {IBatch} from "./../interfaces/IBatch";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            startDate: {
                type: String,
                required: true
            },
            type:{
                type: String,
                required: true
            },
            status: {
                type: String
            },
            time:{
                type: String
            },
            seats:{
                type: String
            },
            branch:{
                type: String
            },
            country:{
                type: String
            },
            course:{
                type: String,
                required: true
            },
            updateDate: {
                type: Date,default: Date()
            },
            updatedBY:{
                type: String
            }
        });
        return schema;
    }

}
var Batch = mongooseConnection.model < IBatch > ("Batch", BatchSchema.schema);
export {Batch};
