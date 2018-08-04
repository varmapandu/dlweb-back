
import { CourseDAO } from "../dao/CourseDAO";
import { ICourse } from "./../models/interfaces/ICourse";

export class CourseService {
    private courseDao: CourseDAO;

    constructor() {
        this.courseDao = new CourseDAO();
    }

    async retrieve() {
        try {
            let data: any = await this.courseDao.retrieve({});
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.courseDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async list() {
        try {
            let data: any = await this.courseDao.list();
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async count(name: string) {
        try {
            let data: any = await this.courseDao.findOneAndUpdate({slug:name}, {$inc : {'views' : 1}});
            return Promise.resolve("Updated")
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: ICourse) {
        try {
            let obj: Array<any> = await this.courseDao.retrieve({ name: item.name });
            if ((item._id == null && obj.length > 0)) {
                return Promise.reject({ message: 'Name already exists.' });
            } else if ((item._id != null && obj[0])) {
                if (item._id != obj[0]._id) {
                    return Promise.reject({ message: 'Name already exists.' })
                } else {
                    var returnData = this.courseDao.save(item);
                }
            } else {
                var returnData = this.courseDao.save(item);
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
