import {DataAccess} from "./../../config/DataAccess";
import {IEvent} from "./../interfaces/IEvent";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class EventSchema {

  static get schema() {
    var schema = mongoose.Schema({

      name: {
        type: String
      },
      title: {
          type: String
      },
      description: {
        type: String
      },
      slug:{
        type: String,
      },
      image:{
        type:String
      },
      imageAlt:{
        type: String
      },
      location:{
        type: String
      },
      address:{
        type: String
      },
      eventDate: {
        type: String
      },
      timing:{
        type: String
      },
      about:[{
        type: String
      }],
      topics:[{
        type: String
      }],
      speakers:[{
        name:{
          type: String
        },
        description:{
          type: String
        }
      }],
      color: {
          type: String
      },
      rate:{
        type: Number
      },
      eventStatus:{
        type: String
      },
      date:{
        type: Date
      },
      new:{
        type: Boolean
      }
    });

    return schema;
  }

}
var Event = mongooseConnection.model < IEvent > ("Event", EventSchema.schema);
export {Event};
