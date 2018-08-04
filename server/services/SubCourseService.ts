
import { SubCourseDAO } from "../dao/SubCourseDAO";
import { ISubCourse } from "./../models/interfaces/ISubCourse";



export class SubCourseService {
    private subCourseDao: SubCourseDAO;


    constructor() {
        this.subCourseDao = new SubCourseDAO();
     
    }

    async entity(id: string) {
        try {
            let data: any = await this.subCourseDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: ISubCourse) {
        try {
            let videoData: any = await this.subCourseDao.save(item);
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
