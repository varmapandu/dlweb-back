import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { LoginService } from "../../services/LoginService";

export class LoginController {
    private router: Router = Router();

    getRouter(): Router {

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const service = new LoginService();
            let result = service.save(item);            
            App.Send(request, response, result);
        });

        this.router.post("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            console.log(item);
            
            const service = new LoginService();
            let result = service.find(item);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
