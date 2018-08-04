import {DataAccess} from "./../../config/DataAccess";
import {IReview} from "./../interfaces/IReview";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ReviewSchema {

  static get schema() {
    var schema = mongoose.Schema({

      name: {
        type: String,
        required: true
      },
      review: [
        {
          name: {
            type: String,
            required: true
          },
          desc:{
            type: String
          }
        }
      ],
      rating: {
        type: Number
      },
      image: {
        type: String
      },
      imageAlt: {
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
var Review = mongooseConnection.model < IReview > ("Review", ReviewSchema.schema);
export {Review};
