
import { ProjectDAO } from "../dao/ProjectDAO";
import { IProject } from "./../models/interfaces/IProject";



export class ProjectService {
    private projectDao: ProjectDAO;


    constructor() {
        this.projectDao = new ProjectDAO();
     
    }

    async entity(id: string) {
        try {
            let data: any = await this.projectDao.findById(id);
            console.log(data);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IProject) {
        try {
            let projectData: any = await this.projectDao.save(item);
            let returnData = {
                _id: item._id ? item._id : projectData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

}
