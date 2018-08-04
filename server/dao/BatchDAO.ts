import { BaseDAO } from "./../config/BaseDAO";
import {IBatch} from "./../models/interfaces/IBatch";
import {Batch} from "./../models/schemas/Batch";
import { Aggregate } from "mongoose";

export class BatchDAO  extends BaseDAO<IBatch> {
    constructor () {
        super(Batch);
    }

    aggregate(query: object, group?:object) {
        return super.aggregate(query, group);
    }
}

Object.seal(BatchDAO);
