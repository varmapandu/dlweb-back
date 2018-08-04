import {DataAccess} from "./../../config/DataAccess";
import {IPage} from "./../interfaces/IPage";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class PageSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true,
                unique: true
            },
            description:{
                type:String
            },
            title: {
                type: String,
                required: true
            },
            slug: {
                type: String,
                unique: true
            },
            image: [
                {
                    url:{
                        type: String
                    },
                    alt:{
                        type: String
                    }
                }
            ],
            video: [
                {
                    url:{
                        type: String
                    },
                    alt:{
                        type: String
                    }
                }
            ],
            meta: [
                {
                    name:{
                        type: String
                    },
                    content:{
                        type: String
                    }
                }
            ],
            updateBy: {
                type: String,
                default: "System"
            },
            updateDate: {
                type: Date,
                default: Date()
            }
        });
        return schema;
    }

}

var Page = mongooseConnection.model < IPage > ("Page", PageSchema.schema);
export {Page};
