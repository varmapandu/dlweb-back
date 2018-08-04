import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { EventService } from "../../services/EventService";
import * as groupArray from "group-array";

export class EventController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/", async (request: Request, response: Response) => {
            const service = new EventService();
            const result = service.retrieve();
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const service = new EventService();
            let result = service.save(item);            
            App.Send(request, response, result);
        });

        this.router.post("/", async (request: Request, response: Response) => {
            const item: any = request.body;
            const service = new EventService();
            let result = service.find(item);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
