import {DataAccess} from "./../../config/DataAccess";
import {IBlog} from "./../interfaces/IBlog";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BlogSchema {

  static get schema() {
    var schema = mongoose.Schema({

      name: {
        type: String
      },
      description:{
        type: String
      },
      author: {
          type: String
      },
      getBy: {
        type: String
      },
      share:{
        type: Number,
      },
      views:{
        type:Number
      },
      slug:{
        type: String
      },
      like:{
        type:Number
      },
      domain:{
        type:String
      },
      image:{
        type: String
      },
      imageAlt:{
        type: String
      },
      video:{
        type: String
      },
      videoAlt:{
        type: String
      },
      intro:[{
        type: String
      }],
      qa: [{
        query: {type:String},
        ans: {type:String}
      }],
      whyDL:{type:String},
      whyContent:{type:String},
      advantage: [{
        why: {type:String},
        reason: {type:String}
      }],
      date:{type:Date},
      updateDate: {type: Date, default:Date.now()},
      updateBy: {type: String}
    });

    return schema;
  }

}
var Blog = mongooseConnection.model < IBlog > ("Blog", BlogSchema.schema);
export {Blog};
