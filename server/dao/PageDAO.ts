import { BaseDAO } from "./../config/BaseDAO";
import { IPage } from "./../models/interfaces/IPage";
import { Page } from "./../models/schemas/Page";

export class PageDAO extends BaseDAO<IPage> {
    constructor() {
        super(Page);
    }

    save(item: IPage) {
        return super.save(item);
    }

    retrieve(query: object) {
        return super.retrieve(query).populate("course", "_id name detail");
    }

    findById(id: string) {
        return super.findById(id).populate("course", "_id name detail");
    }
}

Object.seal(PageDAO);
