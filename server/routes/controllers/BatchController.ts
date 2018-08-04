import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchService } from "../../services/BatchService";
import * as ip from "ipware";
import * as groupArray from "group-array";

export class BatchController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/", async (request: Request, response: Response) => {
            const service = new BatchService();
            const result = service.retrieve();
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            
            const service = new BatchService();
            let result = service.save(item);            
            App.Send(request, response, result);
        });

        this.router.post("/", async (request: Request, response: Response) => {
            const item: any = request.body;
            
            
            const service = new BatchService();
            let result = service.find(item);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
