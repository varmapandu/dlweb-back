import {DataAccess} from "./../../config/DataAccess";
import {IEnroll} from "./../interfaces/IEnroll";
// import {momemt} from ''
var moment = require('moment');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class EnrollSchema {

  static get(){
    var date=new Date().toJSON();
    // console.log(date)
    return date;
  }

  static get schema() {
    var schema = mongoose.Schema({

      name: {
        type: String
      },
      email: {
          type: String
      },
      mobile: {
        type: Number
      },
      ipAddress:{
        type: String,
      },
      message:{
        type:String
      },
      sourceOfPage:{
        type: String
      },
      date:{
        type: Date,
        // default: moment().format('MMMM Do YYYY, h:mm:ss a')
        // default:new Date(Date.now()).toLocaleString()
        default:EnrollSchema.get()
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
var Enroll = mongooseConnection.model < IEnroll > ("Enroll", EnrollSchema.schema);
export {Enroll};
