import { BaseDAO } from "./../config/BaseDAO";
import {ILogin} from "./../models/interfaces/ILogin";
import {Login} from "./../models/schemas/Login";
import { Aggregate } from "mongoose";

export class LoginDAO  extends BaseDAO<ILogin> {
    constructor () {
        super(Login);
    }
}

Object.seal(LoginDAO);
