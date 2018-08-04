
import { EnrollDAO } from "../dao/EnrollDAO";
import { CourseDAO } from "../dao/CourseDAO";
import { ProgramDAO } from "../dao/ProgramDAO";
import { IEnroll } from "./../models/interfaces/IEnroll";
import * as curl from 'curl';
import { App } from "../utils/App";

 //require Node modules

import * as https from "https";  
//var https = require('https');
//var querystring = require('querystring');
import * as querystring from 'querystring';
var request=require("request");
export class EnrollService {
    private enrollDao: EnrollDAO;
    private transporter: any;
    private courseDao : CourseDAO;
    private programDao : ProgramDAO = new ProgramDAO();

    constructor() {
        this.enrollDao = new EnrollDAO();
        this.courseDao = new CourseDAO();
        this.transporter = App.createEmailAccount();
    }

    async entity(id: string) {
        try {
            let data: any = await this.enrollDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: any) {
        // console.log("ssssssssssssssssssss",item)
        try {
            let enrollData: any = await this.enrollDao.save(item);
            
    //         let postData = JSON.stringify(
    //             [
    //             {
    //                 "Attribute": "Source",
    //                 "Value":"Website"
    //             },
    //             {
    //                 "Attribute": "FirstName",
    //                 "Value": item.name
    //             },
    //             {
    //                 "Attribute": "LastName",
    //                 "Value": item.name
    //             },
    //             {
    //                 "Attribute": "EmailAddress",
    //                 "Value": item.email
    //             },
    //             // {   "Attribute":"mx_Comment",
    //             //     "Value": item.message
    //             // },  
    //             {
    //                 "Attribute": "Phone",
    //                 "Value": item.mobile
    //             },
    //             {
    //                 "Attribute": "Mobile",
    //                 "Value": item.mobile
    //             },
    //             {
    //                 "Attribute": "mx_Interested_Course",
    //                 "Value":item.sourceOfPage
    //             },
    //             {
    //                 "Attribute": "SourceReferrerURL",
    //                 "Value":item.sourceOfPage
    //             }
              
             
    //         ]);

    //         // set the post options, changing out the HUB ID and FORM GUID variables.
    //    console.log(postData)
    //         var options = {
    //         hostname: 'api-in21.leadsquared.com',
    //         path: '/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r37860fd93dfa7f394124a3361fd554ae&secretKey=2d2d2662e9bbbe4c461492afd84907f7b08d49a7',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Content-Length': postData.length
    //           }
    //         }
 
    //         console.log(postData);
    //         // set up the request

    //         var request = https.request(options, function(response){
    //         //console.log("Status: " + response.statusCode);
    //         //console.log("Headers: " + JSON.stringify(response.headers));
    //             response.setEncoding('utf8');
    //             response.on('data', function(chunk){
    //                 console.log('Body: ' + chunk)
    //             });
    //         });

    //         request.on('error', function(e){
    //              console.log("Problem with request " + e.message)
    //         });

            const mailOptions = {
                from: '"Digital Lync" <elit.naveen@gmail.com>', // sender address
                to: 'info@digitallynctech.com', // list of receivers
                subject: `Digital Lync`, // Subject line
                //text: 'http://localhost:4200/auth/resetpassword/?t='+tok, // plain text body
                html: `<!DOCTYPE html>
                        <html>
                        <head>
                            <title>New Form Submitted</title>
                        </head>
                        <body>
                            <div>
                                Name : ${item.name} <br>
                                Email : ${item.email} <br>
                                Mobile : ${item.mobile} <br>
                                Message : ${item.message} <br>
                                Source Of Page : ${item.sourceOfPage} <br>
                                Date : ${item.date}
                            </div>
                        </body>
                        </html>` // html body
            };
            //  console.log(enrollData)
            if(enrollData){
                this.transporter.sendMail(mailOptions, (err, info)=>{
                    if(err){
                        return Promise.reject(err);
                    }
                    // console.log(info);
                });
            }

            let returnData = {
                _id: item._id ? item._id : enrollData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async curriculum(item: any) {
        try {
            console.log(item)
            let enrollData: any = await this.enrollDao.save(item);
            const mailOptions = {
                from: '"Digital Lync" <elit.naveen@gmail.com>', // sender address
                to: item.email, // list of receivers
                subject: `Digital Lync`, // Subject line
                //text: 'http://localhost:4200/auth/resetpassword/?t='+tok, // plain text body
                html: `<!DOCTYPE html>
                        <html>
                        <head>
                            <title>${item.sourceOfPage} Curriculum</title>
                        </head>
                        <body>
                        <div style="background-color:#F9F9F9 ;width: 60%;height: 50%;padding-top: 3%;padding-bottom: 3%">
                        <div style="width: 50%;height: 30%;background-color:white;box-shadow:  3px 3px 10px #888888 ;padding: 40px;margin: auto;border-radius: 10px;">
                                <h1 style="text-align: center;font-family: 'Roboto', sans-serif;">Digital Lync</h1>
                                <p style="font-family: 'Roboto', sans-serif;line-height: 30px;">Hi ${enrollData.name},</p>
                            <p style="font-family: 'Roboto', sans-serif;line-height: 25px;">Thanks for showing intrest in ${item.sourceOfPage}, Digital Lync provide you The Best Learning Structure, Hope to see you soon.<br></p>                            
                        </div>
                        </div>
                        </body>
                        </html>` // html body
            };
            let courseData:any = await this.courseDao.findOne({slug:item.sourceOfPage}, 'name curriculum');
            let programData:any = await this.programDao.findOne({slug:item.sourceOfPage}, 'name curriculum');
         
            console.log(enrollData)
            // console.log(courseData);
            // console.log(programData);
            var postData = [
                {
                  "Attribute": "FirstName",
                  "Value": enrollData.name
              },
              {
                  "Attribute": "LastName",
                  "Value": enrollData.name
              },
              {
                  "Attribute": "EmailAddress",
                  "Value": enrollData.email
              },
              {
                  "Attribute": "Phone",
                  "Value": enrollData.mobile
              },
              {
                  "Attribute": "Mobile",
                  "Value": enrollData.mobile
              },
              {
                  "Attribute": "mx_Comment",
                  "Value": enrollData.message || ""
              },
              {
                  "Attribute": "Source",
                  "Value":"Website"
              }
             
           
             ];
          //    console.log(postData);
             let apiBasePath = 'http://api-in21.leadsquared.com';
             let resource = '/v2/LeadManagement.svc/Lead.Create';
             let apiPath = apiBasePath + resource;
             let options = {
                 url: apiPath,
                 qs: {
                  accessKey:"u$r37860fd93dfa7f394124a3361fd554ae",
                  secretKey:"2d2d2662e9bbbe4c461492afd84907f7b08d49a7"
      
              },
                 body: postData,
                 headers: {
                     'content-type': 'application/json'
                 },
                 json: true
             };
          
             request.post(options, function(error, response, body,res) {
                 if (error) {
                  //    callback('error calling LeadSquared API', null).;lkiok00-000000;
                 } else {
                     
                     if (response.statusCode === 200) {
                         let leadId = body.Message.Id;
                         console.log(leadId);
                      //    callback(null, leadId);
                     } 
                    else {
                  //   callback(null, response.body.ExceptionMessage);
                  console.log(response.body.ExceptionMessage);
                  // res.write(response.body.ExceptionMessage);

                    }
                 }
             });
            if(enrollData){
                    this.transporter.sendMail(mailOptions, (err, info)=>{
                        if(err){
                            return Promise.reject(err);
                        }
                        console.log(info);
                    });
                    let returnData;
                    if(courseData == null ){
                        returnData = { message: "Mail Sent Successfully", curriculum: programData.curriculum}
                    }else{
                        returnData = { message: "Mail Sent Successfully", curriculum: courseData.curriculum}
                    }
                    console.log(returnData)
                    return Promise.resolve(returnData)
                }else{
                    return Promise.reject("Technical issue, Sorry for Inconvience");
                }
            } catch (error) {
            return Promise.reject("Technical issue, Sorry for Inconvience");
        }
    }

    //for hubspot form

    // async hubspot(item: any,req:any) {
    //     try {
    //         //let data: any = await this.enrollDao.findById(id);
    //         // let data: any="data sent to hubspot";

    //         //     // build the data object

    //         //     // var postData = querystring.stringify({
    //         //     // 'firstname':item.name,
    //         //     // 'email': item.email,                 
    //         //     // 'phone':item.phonenumber,
    //         //     // 'message':item.message,                
    //         //     // 'hs_context': JSON.stringify({
    //         //     //     "hutk":"123456789",
    //         //     //     "ipAddress":  req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    //         //     //     "pageUrl": item.slug,
    //         //     //     "pageName": item.slug
    //         //     // })
    //         //     // });

    //             let postData = JSON.stringify([
    //                 {
    //                     "Attribute": "FirstName",
    //                     "Value": "krupa"
    //                 },
    //                 {
    //                     "Attribute": "EmailAddress",
    //                     "Value": "krupa.nveen23@australia.com"
    //                 },
    //                 {   "Attribute":"Message",
    //                     "Value":""
    //                 },  
    //                 {
    //                     "Attribute": "Phone",
    //                     "Value": 8989898989
    //                 },
    //                 {
    //                     "Attribute": "Source Page",
    //                     "Value":"biscuit page"
    //                 }
                  
                 
    //             ]);

    //             // set the post options, changing out the HUB ID and FORM GUID variables.

    //             var options = {
    //             hostname: 'api-in21.leadsquared.com',
    //             path: '/v2/LeadManagement.svc/Lead.Capture?accessKey=u$rf99f520720223acab7229b415787ae6a&secretKey=f504b70e8c4dcba8e28d1d64eb271d311d02baf0',
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Content-Length': Buffer.byteLength(postData)
    //               }
    //             }
    //             console.log("Here");

    //             // set up the request

    //             var request = https.request(options, function(response){
    //             //console.log("Status: " + response.statusCode);
    //             //console.log("Headers: " + JSON.stringify(response.headers));
    //             console.log(`STATUS: ${response.statusCode}`);
    //         console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    //                 console.log("Here");
    //                 response.setEncoding('utf8');
    //                 response.on('data', function(chunk){
    //                     console.log('Body: ' + chunk)
    //                 });
    //             });

    //             request.on('error', function(e){
    //                  console.log("Problem with request " + e.message)
    //             });

    //             // post the data
    //             request.write(postData);
    //             request.end();
    //         return Promise.resolve("Submitted")
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    async leadsquare(item: any,req:any) {
        try {
            //let data: any = await this.enrollDao.findById(id);
            let data: any="data sent to lead sqaures!";
 
                // build the data object
            //    console.log(item);
                var postData = [
                  {
                    "Attribute": "FirstName",
                    "Value": item.name
                },
                {
                    "Attribute": "LastName",
                    "Value": item.name
                },
                {
                    "Attribute": "EmailAddress",
                    "Value": item.email
                },
                {
                    "Attribute": "Phone",
                    "Value": item.phonenumber || ""
                },
                {
                    "Attribute": "Mobile",
                    "Value": item.phonenumber || ""
                },
                {
                    "Attribute": "mx_Comment",
                    "Value": item.message || ""
                },
                {
                    "Attribute": "Source",
                    "Value":"Website"
                }
               
             
               ];
            //    console.log(postData);
               let apiBasePath = 'http://api-in21.leadsquared.com';
               let resource = '/v2/LeadManagement.svc/Lead.Create';
               let apiPath = apiBasePath + resource;
               let options = {
                   url: apiPath,
                   qs: {
                    accessKey:"u$r37860fd93dfa7f394124a3361fd554ae",
                    secretKey:"2d2d2662e9bbbe4c461492afd84907f7b08d49a7"
        
                },
                   body: postData,
                   headers: {
                       'content-type': 'application/json'
                   },
                   json: true
               };
            
               request.post(options, function(error, response, body,res) {
                   if (error) {
                    //    callback('error calling LeadSquared API', null).;lkiok00-000000;
                   } else {
                       
                       if (response.statusCode === 200) {
                           let leadId = body.Message.Id;
                           console.log(leadId);
                        //    callback(null, leadId);
                       } 
                      else {
                    //   callback(null, response.body.ExceptionMessage);
                    console.log(response.body.ExceptionMessage);
                    // res.write(response.body.ExceptionMessage);

                      }
                   }
               });
        } catch (error) {
            return Promise.reject(error);
        }
    }


}
