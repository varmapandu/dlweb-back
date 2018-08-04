import { BaseDAO } from "./../config/BaseDAO";
import {IForm} from "./../models/interfaces/IForm";
import {Form} from "./../models/schemas/Form";
import { Aggregate } from "mongoose";

export class FormDAO  extends BaseDAO<IForm> {
    constructor () {
        super(Form);
    }
}

Object.seal(FormDAO);
