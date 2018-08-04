import { BaseDAO } from "./../config/BaseDAO";
import {IProject} from "./../models/interfaces/IProject";
import {Project} from "./../models/schemas/Project";

export class ProjectDAO  extends BaseDAO<IProject> {
    constructor () {
        super(Project);
    }
    find(data){
        return super.find(data, "-_id name description image imageAlt  ")
    }
}

Object.seal(ProjectDAO);
