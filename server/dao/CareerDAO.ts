import { BaseDAO } from "./../config/BaseDAO";
import {ICareer} from "./../models/interfaces/ICareer";
import {Career} from "./../models/schemas/Career";

export class CareerDAO  extends BaseDAO<ICareer> {
    constructor () {
        super(Career);
    }
}

Object.seal(CareerDAO);
