import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { CourseService } from "../../services/CourseService";

export class CourseController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/", async (request: Request, response: Response) => {
            const courseService = new CourseService();
            const result = courseService.retrieve();
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            console.log("item")
            const courseService = new CourseService();
            let result = courseService.save(item);            
            App.Send(request, response, result);
        });

        this.router.post("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const courseService = new CourseService();
            let result = courseService.retrieve();
            App.Send(request, response, result);
        });

        this.router.post("/count", async (request: Request, response: Response) => {
            const item: any = request.body.slug;
            const courseService = new CourseService();
            let result = courseService.count(item);
            App.Send(request, response, result);
        });

        this.router.get("/list", async (request: Request, response: Response) => {
            const courseService = new CourseService();
            const result = courseService.list();
            App.Send(request, response, result);
        });

        return this.router;
    }
}
