import { BaseDAO } from "./../config/BaseDAO";
import {IBlog} from "./../models/interfaces/IBlog";
import {Blog} from "./../models/schemas/Blog";

export class BlogDAO  extends BaseDAO<IBlog> {
    constructor () {
        super(Blog);
    }

}

Object.seal(BlogDAO);
