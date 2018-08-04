import { BaseDAO } from "./../config/BaseDAO";
import {IEnroll} from "./../models/interfaces/IEnroll";
import {Enroll} from "./../models/schemas/Enroll";

export class EnrollDAO  extends BaseDAO<IEnroll> {
    constructor () {
        super(Enroll);
    }

    find(data){
        return super.find(data, "-_id name courseImage courseImageAlt position date");
    }
}

Object.seal(EnrollDAO);
