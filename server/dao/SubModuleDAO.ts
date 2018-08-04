import { BaseDAO } from "./../config/BaseDAO";
import {ISubModule} from "./../models/interfaces/ISubModule";
import {SubModule} from "./../models/schemas/SubModule";

export class SubModuleDAO  extends BaseDAO<ISubModule> {
    constructor () {
        super(SubModule);
    }

    find(data){
        return super.find(data, "-_id name description moduleImage moduleImageAlt image");
    }
}

Object.seal(SubModuleDAO);
