import {DataAccess} from "./../../config/DataAccess";
import {IForm} from "./../interfaces/IForm";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class FormSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String
            },
            dob: {
                type: String
            },
            mobile:{
                type: Number
            },
            email: {
                type: String
            },
            address: {
                type: String
            },
            college: {
                type: String
            },
            courseInterested: {
                type: String
            },
            qualification: {
                type: String
            },
            specialization: {
                type: String
            }
        });
        return schema;
    }

}
var Form = mongooseConnection.model < IForm > ("Form", FormSchema.schema);
export {Form};
