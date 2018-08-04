
import { ReviewDAO } from "../dao/ReviewDAO";
import { IReview } from "./../models/interfaces/IReview";



export class ReviewService {
    private reviewDao: ReviewDAO;


    constructor() {
        this.reviewDao = new ReviewDAO();
     
    }

    async entity(id: string) {
        try {
            let data: any = await this.reviewDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IReview) {
        try {
            let videoData: any = await this.reviewDao.save(item);
            let returnData = {
                _id: item._id ? item._id : videoData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

}
