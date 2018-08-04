
import { FormDAO } from "../dao/FormDAO";
import { IForm } from "./../models/interfaces/IForm";
import * as curl from 'curl';
import { App } from "../utils/App";

export class FormService {
    private formDao: FormDAO;
    private transporter: any;
   

    constructor() {
        this.formDao = new FormDAO();
        this.transporter = App.createEmailAccount();
    }

    async entity(id: string) {
        try {
            let data: any = await this.formDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IForm) {
        try {
            let data: any = await this.formDao.save(item);
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
