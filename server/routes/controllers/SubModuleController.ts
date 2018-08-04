import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { SubModuleService } from "../../services/SubModuleService";

export class SubModuleController {

    private router: Router = Router();
    private service = new SubModuleService();

    getRouter(): Router {

        this.router.get("/:id", async (request: Request, response: Response) => {
            let id = request.params.id;
            const result = this.service.entity(id);
            App.Send(request, response, result);
        });

        // this.router.get("/", async (request: Request, response: Response) => {
        //     let data = request.body.data;
        //     const result = this.service.entity(data);
        //     App.Send(request, response, result);
        // });

        this.router.put("/", async (request: Request, response: Response) => {
            let data = request.body.data;
            const result = this.service.save(data);
            App.Send(request, response, result);
        });

        

        return this.router;
    }
}
