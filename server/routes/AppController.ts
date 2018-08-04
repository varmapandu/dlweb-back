
import {CourseController} from "./controllers/CourseController";
import {ProgramController} from "./controllers/ProgramController";
import {EventController} from "./controllers/EventController";
import { PageController } from "./controllers/PageController";
import { BatchController } from "./controllers/BatchController";
import { ProjectController } from "./controllers/ProjectController";
import { SubCourseController } from "./controllers/SubCourseController";
import { ReviewController } from "./controllers/ReviewController";
import { SubModuleController } from "./controllers/SubModuleController";
import { EnrollController } from "./controllers/EnrollController";
import {PaymentController} from "./common/PaymentController";
import { BlogController } from "./controllers/BlogController";
import {FormController} from "./controllers/FormController";
import { LoginController } from "./controllers/LoginController";

export class AppController {
    private router: any;

    registerRoutes(router: any) {    
        router.use("/course", new CourseController().getRouter());
        router.use("/page", new PageController().getRouter());
        router.use("/project",new ProjectController().getRouter());
        router.use("/subcourse",new SubCourseController().getRouter());
        router.use("/batch",new BatchController().getRouter());
        router.use("/review", new ReviewController().getRouter());
        router.use("/submodule", new SubModuleController().getRouter());
        router.use("/enroll", new EnrollController().getRouter());
        router.use("/programs", new ProgramController().getRouter());
        router.use('/event', new EventController().getRouter());

        router.use('/ccpayment', new PaymentController().getRouter());

        router.use('/blog', new BlogController().getRouter());
        router.use("/login", new LoginController().getRouter());
        router.use('/form', new FormController().getRouter());

    }
}
