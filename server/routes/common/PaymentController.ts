import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { CCPaymentService } from "../../services/common/CCPaymentService";

export class PaymentController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/",async(request: Request, response: Response) => {
            //let reqData = request.body;
            console.log('Inside PaymentController');
            const ccPaymentService = new CCPaymentService();
            const result = ccPaymentService.payment();
            console.log(result);
            response.header( {"Content-Type": "text/html"});
	        response.write(result);
	        response.send();
        });

        return this.router;
    }
}