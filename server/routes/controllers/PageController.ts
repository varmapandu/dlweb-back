import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { PageService } from "../../services/PageService";

export class PageController {

    private router: Router = Router();
    private service = new PageService();

    getRouter(): Router {

        this.router.post("/", async (request: Request, response: Response) => {
            let name = request.body.name;
            const result = this.service.entity(name);
            App.Send(request, response, result);
        });

        this.router.post("/programs", async (request: Request, response: Response) => {
            let name = request.body.name;
            const result = this.service.programs(name);
            App.Send(request, response, result);
        });

        this.router.post("/future", async (request: Request, response: Response) => {
            let name = request.body.name;
            const result = this.service.future(name);
            App.Send(request, response, result);
        });

        this.router.post("/program", async (request: Request, response: Response) => {
            let name = request.body.slug;
            const result = this.service.program(name);
            App.Send(request, response, result);
        });

        this.router.post("/event", async (request: Request, response: Response) => {
            let slug = request.body.slug;
            const result = this.service.event(slug);
            App.Send(request, response, result);
        });

        this.router.post("/blog", async (request: Request, response: Response) => {
            let slug = request.body.slug;
            const result = this.service.blog(slug);
            App.Send(request, response, result);
        });

        this.router.post("/course", async (request: Request, response: Response) => {
            let slug = request.body.slug;            
            const result = this.service.course(slug);
            App.Send(request, response, result);
        });

        this.router.post("/events", async (request: Request, response: Response) => {
            let name = request.body.name;
            const result = this.service.events(name);
            App.Send(request, response, result);
        });

        this.router.post("/blogs", async (request: Request, response: Response) => {
            let name = request.body.name;
            const result = this.service.blogs(name);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            let data = request.body.data;
            const result = this.service.save(data);
            App.Send(request, response, result);
        });

        

        return this.router;
    }
}
