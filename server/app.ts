import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";
import * as path from "path";
import * as https from 'https';
import * as fs from 'fs';





process.env.NODE_ENV = "testing";



const app: express.Application = express();

app.use('/assets',express.static(path.join(process.cwd(), 'public')));
app.use(json());
// app.use(urlencoded({
//     extended: true
// }));
var parsePost = function (req, callback) {
    var data = '';
    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        if (data != '') {
            data = JSON.parse(data);
        }
        callback(data);
    });
}


app.all('*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');

    if (req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1) {
        parsePost(req, function (data) {
            if (data && data != '') {
                req.body = data;
            }
            next();
        });
    } else {
        next();
    }

});


app.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        name: "Website Application"
    })
});

app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    response.status(err.status || 500);
    response.json({
        error: "Server error"
    })
});


var appRestRouter = express.Router();
import { AppController } from './routes/AppController';
let appController = new AppController();
appController.registerRoutes(appRestRouter);
app.use('/api', appRestRouter);

//var apiDocRouter  = express.Router();
import { APIDocs } from './swagger/ApiDocs';
let apiDocs = new APIDocs();
app.use('/swagger', apiDocs.getRouter());

const server: http.Server = app.listen(8001);


export { server };
