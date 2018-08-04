import {DataAccess} from "./../../config/DataAccess";
import {ISubModule} from "./../interfaces/ISubModule";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class SubModuleSchema {

  static get schema() {
    var schema = mongoose.Schema({

      name: {
        type: String,
        required: true
      },
      description: {
          type: String,
          required: true
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
var SubModule = mongooseConnection.model < ISubModule > ("SubModule", SubModuleSchema.schema);
export {SubModule};
