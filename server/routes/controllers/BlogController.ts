import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BlogService } from "../../services/BlogService";

export class BlogController {

    private router: Router = Router();
    private service = new BlogService();

    getRouter(): Router {

        this.router.get("/:id", async (request: Request, response: Response) => {
            let id = request.params.id;
            const result = this.service.entity(id);
            App.Send(request, response, result);
        });

        this.router.get("/list", async (request: Request, response: Response) => {
            let id = request.params.id;
            const result = this.service.list();
            App.Send(request, response, result);
        });

        // this.router.get("/", async (request: Request, response: Response) => {
        //     let data = request.body.data;
        //     const result = this.service.entity(data);
        //     App.Send(request, response, result);
        // });
        this.router.post("/count", async (request: Request, response: Response) => {
            const item: any = request.body.slug;
            const blogService = new BlogService();
            let result = blogService.count(item);
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
