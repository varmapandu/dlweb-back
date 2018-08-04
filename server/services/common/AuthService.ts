
// import { AccountDAO } from "../../dao/AccountDAO";
// import { IAccount } from "../../models/interfaces/IAccount";
// import { ProfileDAO } from "../../dao/ProfileDAO";
// import { MenuAccessDAO } from "../../dao/MenuAccessDAO";
// import { BranchDAO } from "../../dao/BranchDAO";
// import { AccountService } from "../AccountService";

// export class AuthService {
//     private accountDao: AccountDAO;
//     private profileDAO: ProfileDAO;
//     private menuAccessDAO: MenuAccessDAO;
//     private accountService: AccountService;
//     private branchDAO: BranchDAO;
//     private providers: any;

//     constructor() {
//         this.accountDao = new AccountDAO();
//         this.profileDAO = new ProfileDAO();
//         this.menuAccessDAO = new MenuAccessDAO();
//         this.accountService = new AccountService();
//         this.branchDAO = new BranchDAO();
//         this.providers = {
//             email: 'email',
//             facebook: 'facebook',
//             google: 'google',
//             linkedin: 'linkedin'
//         };
//     };

//     retrieve(reqData: any) {
//         switch (reqData.provider) {
//             case 'email': {
//                 return this.sendEmailResponse(reqData);
//             }
//             case 'facebook': {
//                 return this.sendSocailResponse(reqData);
//             }
//             case 'google': {
//                 return this.sendSocailResponse(reqData);
//             }
//             case 'linkedin': {
//                 return this.sendSocailResponse(reqData);
//             }
//             default: {
//                 return this.sendEmailResponse(reqData);
//             }
//         }
//     };

//     async signup(reqData: any) {
//         const newAccount: any = {};
//         newAccount._id = null;
//         newAccount.role = "NA";
//         newAccount.password = "0";
//         newAccount.address = {};
//         newAccount.address.country = "India";
//         const profile: any = {};
//         profile._id = null;
//         profile.email = reqData.email;
//         if (reqData.password) {
//             newAccount.password = reqData.password;
//         }
//         if (reqData.name) {
//             profile.name = reqData.name;
//         } else {
//             profile.name = reqData.email.substring(0, reqData.email.indexOf('@'));
//         }
//         newAccount.profile = profile;
//         console.log(newAccount);
//         try {
//             return this.accountService.save(newAccount).then(results => {
//                 return this.retrieve({ email: reqData.email, provider: "email" })
//             }).catch(error => {
//                 return Promise.reject(error);
//             })

//         } catch (error) {
//             return Promise.reject(error);
//         }

//     }

//     async sendEmailResponse(reqData: any) {
//         try {
//             var responseData: any = {};
//             var profileObj: any = await this.profileDAO.retrieve({ email: reqData.email });
//             profileObj = profileObj[0];
//             if (profileObj != null) {
//                 var accountObj: any = await this.accountDao.retrieve({ profile: profileObj._id });
//                 accountObj = accountObj[0];
//                 if (accountObj != null) {
//                     responseData.user = {};
//                     responseData.user.id = accountObj._id;
//                     responseData.user.role = accountObj.role;
//                     responseData.user.name = accountObj.profile.name;
//                     responseData.user.email = accountObj.profile.email;
//                     responseData.user.mobile = accountObj.profile.mobile;
//                     var menuAccessObj = await this.menuAccessDAO.retrieve({ role: accountObj.role });
//                     responseData.menuList = [];
//                     if (menuAccessObj != null) {
//                         menuAccessObj.forEach( (element: any) => {
//                              responseData.menuList.push( element.menu );
//                         });
//                     }
//                     var branch: any = await this.branchDAO.findById(accountObj.branch);
//                     if(branch){
//                         responseData.branch = {};
//                         responseData.branch.id = branch._id;
//                         responseData.branch.name = branch.name;
//                     }
//                     else {
//                         return Promise.reject({ message: "Error in retreving menu access items " });
//                     }
//                 }
//                 else {
//                     return Promise.reject({ message: "Didn't find any account with the provided profile " });
//                 }
//             }
//             else {
//                 return Promise.reject({ message: "Didn't find any profile with the provided email " });
//             }
//             return Promise.resolve(responseData);
//         }
//         catch (error) {
//             return Promise.reject(error);
//         }
//     };

//     async sendSocailResponse(reqData: any) {
//         try {
//             var responseData: any = {};
//             var profileObj: any = await this.profileDAO.retrieve({ email: reqData.email });
//             profileObj = profileObj[0];
//             if (profileObj != null) {
//                 var accountObj: any = await this.accountDao.retrieve({ profile: profileObj._id });
//                 accountObj = accountObj[0];
//                 if (accountObj != null) {
//                     responseData.user = {};
//                     responseData.user.id = accountObj._id;
//                     responseData.user.role = accountObj.role;
//                     responseData.user.name = accountObj.profile.name;
//                     responseData.user.email = accountObj.profile.email;
//                     responseData.user.mobile = accountObj.profile.mobile;
//                     var menuAccessObj = await this.menuAccessDAO.retrieve({ role: accountObj.role });
//                     responseData.menuList = [];
//                     if (menuAccessObj != null) {
//                         menuAccessObj.forEach( (element: any) => {
//                              responseData.menuList.push( element.menu );
//                         });
//                     }
//                     var branch: any = await this.branchDAO.findById(accountObj.branch);
//                     if(branch){
//                          responseData.branch = {};
//                         responseData.branch.id = branch._id;
//                         responseData.branch.name = branch.name;
//                     }
//                     else {
//                         return Promise.reject({ message: "Error in retreving menu access items " });
//                     }
//                 }
//                 else {
//                     return Promise.reject({ message: "Didn't find any account with the provided profile " });
//                 }
//             } else {
//                 return this.signup(reqData);
//             }
//             return Promise.resolve(responseData);
//         }
//         catch (error) {
//             return Promise.reject(error);
//         }
//     };

// }
