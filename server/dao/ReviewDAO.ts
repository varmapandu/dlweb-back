import { BaseDAO } from "./../config/BaseDAO";
import {IReview} from "./../models/interfaces/IReview";
import {Review} from "./../models/schemas/Review";

export class ReviewDAO  extends BaseDAO<IReview> {
    constructor () {
        super(Review);
    }
    findById(_id: string) {
        return this.model.findById(_id, "review");
    }
}

Object.seal(ReviewDAO);
