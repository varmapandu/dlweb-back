
import { SubModuleDAO } from "../dao/SubModuleDAO";
import { ISubModule } from "./../models/interfaces/ISubModule";



export class SubModuleService {
    private subModuleDao: SubModuleDAO;


    constructor() {
        this.subModuleDao = new SubModuleDAO();
     
    }

    async entity(id: string) {
        try {
            let data: any = await this.subModuleDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: ISubModule) {
        try {
            let moduleData: any = await this.subModuleDao.save(item);
            let returnData = {
                _id: item._id ? item._id : moduleData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

}
