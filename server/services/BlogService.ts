
import { BlogDAO } from "../dao/BlogDAO";
import { IBlog } from "./../models/interfaces/IBlog";
import * as curl from 'curl';
import { App } from "../utils/App";

export class BlogService {
    private blogDao: BlogDAO;
    private transporter: any;
   

    constructor() {
        this.blogDao = new BlogDAO();
        this.transporter = App.createEmailAccount();
    }

    async entity(id: string) {
        try {
            let data: any = await this.blogDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async list(){
        try{
            let data: any = await this.blogDao.find({}, "getBy").distinct('getBy')
            return Promise.resolve(data);
        }catch (error){
            return Promise.reject(error);
        }
    }
    async count(name: string) {
        try {
            let data: any = await this.blogDao.findOneAndUpdate({slug:name}, {$inc : {'views' : 1}});
            return Promise.resolve("Updated")
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async save(item: IBlog) {
        try {
            let data: any = await this.blogDao.save(item);
            let returnData = {
                _id: item._id ? item._id : data._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }
}
