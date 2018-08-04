import {DataAccess} from "./../../config/DataAccess";
import {ISubCourse} from "./../interfaces/ISubCourse";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
delete mongoose.connection.models['SubCourse'];
class SubCourseSchema {

  static get schema() {
    var schema = mongoose.Schema({

      name: {
        type: String,
        required: true
      },
      description:{
        type: String
      },
      image: {
        type: String,
        required: true
      },
      imageAlt:{
        type: String
      },
      getBy:{
        type: String,
        required: true
      },
      position:{
        type: Number,
        required: true
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
var SubCourse = mongooseConnection.model < ISubCourse > ("SubCourse", SubCourseSchema.schema);
export {SubCourse};
