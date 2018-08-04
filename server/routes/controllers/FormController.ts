import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { FormService } from "../../services/FormService";

export class FormController {
    private router: Router = Router();

    getRouter(): Router {

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;    
            const service = new FormService();
            let result = service.save(item);            
            App.Send(request, response, result);
        });
        
        return this.router;
    }
}
