
import { LoginDAO } from "../dao/LoginDAO";
import { ILogin } from "./../models/interfaces/ILogin";
import * as curl from 'curl';
import { App } from "../utils/App";

export class LoginService {
    private loginDao: LoginDAO;
    private transporter: any;
   

    constructor() {
        this.loginDao = new LoginDAO();
        this.transporter = App.createEmailAccount();
    }

    async find(item: string) {
        try {  
            console.log(item);
                      
            let data: any = await this.loginDao.findOne(item);
            if(data){
                return Promise.resolve("Login Success");
            }else{
                return Promise.reject("Invalid Credientials");
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: ILogin) {
        try {
            let data: any = await this.loginDao.save(item);
            let returnData = {
                _id: item._id ? item._id : data._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
