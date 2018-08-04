import {DataAccess} from "./../../config/DataAccess";
import {ILogin} from "./../interfaces/ILogin";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class LoginSchema {

    static get schema() {
        var schema = mongoose.Schema({
            username: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String
            }
        });
        return schema;
    }

}
var Login = mongooseConnection.model < ILogin > ("Login", LoginSchema.schema);
export {Login};
