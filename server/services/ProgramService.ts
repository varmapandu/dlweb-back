
import { ProgramDAO } from "../dao/ProgramDAO";
import { IProgram } from "./../models/interfaces/IProgram";
import * as groupArray from "group-array";

export class ProgramService {
    private programDao: ProgramDAO;

    constructor() {
        this.programDao = new ProgramDAO();
    }

    async retrieve() {
        try {
            let data: any = await this.programDao.retrieve({});
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async future() {
        try {
            let data: any = await this.programDao.retrieve({programType:"Future"});
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.programDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IProgram) {
        try {
            let obj: Array<any> = await this.programDao.retrieve({ name: item.name });
            if ((item._id == null && obj.length > 0)) {
                return Promise.reject({ message: 'Name already exists.' });
            } else if ((item._id != null && obj[0])) {
                if (item._id != obj[0]._id) {
                    return Promise.reject({ message: 'Name already exists.' })
                } else {
                    var returnData = this.programDao.save(item);
                }
            } else {
                var returnData = this.programDao.save(item);
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async count(name: string) {
        try {
            let data: any = await this.programDao.findOneAndUpdate({slug:name}, {$inc : {'views' : 1}});
            return Promise.resolve("Updated")
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async list() {
        try {
            let pData: any = await this.programDao.list({programType:"Placement"});
            let aData: any = await this.programDao.list({programType:"Academic"});
            let oData: any = await this.programDao.list({programType:"other"});
            let fFuture: any = await this.programDao.list({programType:"Future"});
            let gData: any = await this.programDao.list({programType:"Government"});
            let data = { placement: pData, academic: aData, other:oData,future:fFuture,government:gData};
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async specific(item) {
        try {
            let pData: any = await this.programDao.specific({programType:item});
            let data = { list:pData};
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async futureList() {
        try {
            let fData: any = await this.programDao.list({programType:"Future"});
            let data = { future:fData};
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
