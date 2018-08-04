
import { BatchDAO } from "../dao/BatchDAO";
import { IBatch } from "./../models/interfaces/IBatch";
import * as moment from "moment";
import * as groupArray from "group-array";

export class BatchService {
    private batchDao: BatchDAO;

    constructor() {
        this.batchDao = new BatchDAO();
    }

    async retrieve() {
        try {
            let data: any = await this.batchDao.retrieve({});
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async find(item: any) {
        try {
            let date = moment();
            let week = moment();
            week.add(30,'days');
            let start = date.toISOString();
            let end = week.toISOString();
            // let data: any = await this.batchDao.find({course:item.course,branch:item.branch,startDate: {
            //     $gte: start,
            //     $lt: end
            //   }});
            let data: any = await this.batchDao.find(item);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IBatch) {
        try {
            let obj: Array<any> = await this.batchDao.retrieve({ name: item.name });
            if ((item._id == null && obj.length > 0)) {
                return Promise.reject({ message: 'Name already exists.' });
            } else if ((item._id != null && obj[0])) {
                if (item._id != obj[0]._id) {
                    return Promise.reject({ message: 'Name already exists.' })
                } else {
                    var returnData = this.batchDao.save(item);
                }
            } else {
                var returnData = this.batchDao.save(item);
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
