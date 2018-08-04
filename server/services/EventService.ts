
import { EventDAO } from "../dao/EventDAO";
import { IEvent } from "./../models/interfaces/IEvent";
import * as moment from "moment";
import * as groupArray from "group-array";

export class EventService {
    private eventDao: EventDAO;

    constructor() {
        this.eventDao = new EventDAO();
    }

    async retrieve() {
        try {
            let data: any = await this.eventDao.retrieve({});
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
            let data: any = await this.eventDao.find(item);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IEvent) {
        try {
            let eventData: any = await this.eventDao.save(item);
            let returnData = {
                _id: item._id ? item._id : eventData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

}
