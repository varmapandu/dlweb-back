import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { ProgramService } from "../../services/ProgramService";

export class ProgramController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/", async (request: Request, response: Response) => {
            const service = new ProgramService();
            const result = service.retrieve();
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            console.log("item")
            const service = new ProgramService();
            let result = service.save(item);            
            App.Send(request, response, result);
        });

        this.router.post("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const service = new ProgramService();
            let result = service.retrieve();
            App.Send(request, response, result);
        });
        
        this.router.post("/count", async (request: Request, response: Response) => {
            const item: any = request.body.slug;
            const courseService = new ProgramService();
            let result = courseService.count(item);
            App.Send(request, response, result);
        });

        this.router.get("/futureDegree", async (request: Request, response: Response) => {
            const courseService = new ProgramService();
            let result = courseService.future();
            App.Send(request, response, result);
        });

        this.router.get("/futureList", async (request: Request, response: Response) => {
            const courseService = new ProgramService();
            let result = courseService.futureList();
            App.Send(request, response, result);
        });

        this.router.get("/list", async (request: Request, response: Response) => {
            const service = new ProgramService();
            const result = service.list();
            App.Send(request, response, result);
        });


        this.router.post("/specific", async (request: Request, response: Response) => {
            const item: any = request.body.type;
            const service = new ProgramService();
            let result = service.specific(item);
            App.Send(request, response, result);
        });
        
        
        return this.router;
    }
}
