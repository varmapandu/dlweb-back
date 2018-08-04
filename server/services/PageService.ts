
import { PageDAO } from "../dao/PageDAO";
import { IPage } from "./../models/interfaces/IPage";
import { CourseDAO } from "../dao/CourseDAO";
import { EventDAO } from '../dao/EventDAO';
import { Course } from "../models/schemas/Course";
import { ProjectDAO} from "../dao/ProjectDAO";
import { SubCourseDAO } from "../dao/SubCourseDAO";
import { SubModuleDAO } from "../dao/SubModuleDAO";
import { ProgramDAO } from "../dao/ProgramDAO";
import { BatchDAO } from "../dao/BatchDAO";
import { BlogDAO } from "../dao/BlogDAO";
import * as moment from "moment";
import * as groupArray from "group-array";

export class PageService {
    private pageDao: PageDAO;
    private courseDao: CourseDAO;
    private projectDao: ProjectDAO;
    private subCourseDao: SubCourseDAO;
    private subModuleDao: SubModuleDAO;
    private batchDao: BatchDAO;
    private programDao: ProgramDAO;
    private eventsDao : EventDAO = new EventDAO();
    private blogDao : BlogDAO = new BlogDAO();
    

    constructor() {
        this.pageDao = new PageDAO();
        this.courseDao = new CourseDAO();
        this.projectDao = new ProjectDAO();
        this.subCourseDao = new SubCourseDAO();
        this.subModuleDao = new SubModuleDAO();
        this.batchDao = new BatchDAO();
        this.programDao = new ProgramDAO();
    }

    async entity(name: any) {
        try {
            let data:any = await this.pageDao.findOne({name:name});
            let courseData : any = await this.courseDao.allCoursesPage();
            let newData = {};
            newData['page'] = data
            newData['courses'] = courseData;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async course(name: any) {
        try {
            let data:any = await this.courseDao.findOne({slug:name});
            //let data: any = await this.courseDao.findOneAndUpdate({slug:name}, {$inc : {'views' : 1}});       
            let pageData: any = await this.pageDao.findOne({slug:name});
            console.log(data.name)
            let projectsData : any = await this.projectDao.find({getBy:data.name});
            let subCourseData : any = await this.subCourseDao.find({getBy:data.name});
            let subModuleData : any = await this.subModuleDao.find({getBy:data.name});
            let newData = {};
            newData['page'] = pageData;
            newData['course'] = data;
            newData['projects'] = projectsData;
            newData['subCourse'] = subCourseData;
            newData['subModules'] = subModuleData;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async events(name: any) {
        try {
            let data:any = await this.pageDao.findOne({name:name});
            let eventsData : any = await this.eventsDao.find({}, "name image imageAlt description slug location eventStatus").sort({date:-1});            
            let eventslist = groupArray(eventsData, 'location');
            let newData = {};
            newData['page']= data;
            newData['events'] = eventslist;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async event(slug: any) {
        try {
            let data:any = await this.eventsDao.findOne({slug:slug});
            let pageData: any = await this.pageDao.findOne({slug:slug});
            let newData = {};
            newData['page'] = pageData;
            newData['event'] = data;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async blogs(name: any) {
        try {
            let data:any = await this.pageDao.findOne({name:name});
            let blogData : any = await this.blogDao.find({}, "name image imageAlt slug views shares description").sort({updateDate:-1});            
            let newData = {};
            newData['page']= data;
            newData['blogs']= blogData;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async blog(slug: any) {
        try {
            let data:any = await this.blogDao.findOne({slug:slug});
            let pageData: any = await this.pageDao.findOne({slug:slug});
            let newData = {};
            newData['page'] = pageData;
            newData['blog'] = data;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async program(name: any) {
        try {
            let data:any = await this.programDao.findOne({slug:name});
            //let data: any = await this.courseDao.findOneAndUpdate({slug:name}, {$inc : {'views' : 1}});       
            let pageData: any = await this.pageDao.findOne({slug:name});
            // let projectsData : any = await this.projectDao.find({getBy:data.name});
            // let subCourseData : any = await this.subCourseDao.find({getBy:data.name});
            let newData = {};
            newData['page'] = pageData;
            newData['program'] = data;
            // newData['projects'] = projectsData;
            // newData['subCourse'] = subCourseData;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async programs(name: any) {
        try {
            let data:any = await this.pageDao.findOne({name:name});
            let programsData : any = await this.programDao.allProgramPage();
            let newData = {};
            newData['page'] = data
            newData['program'] = programsData;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async future(name: any) {
        try {
            let data:any = await this.pageDao.findOne({name:name});
            let programsData : any = await this.programDao.allfuture();
            let newData = {};
            newData['page'] = data
            newData['program'] = programsData;
            return Promise.resolve(newData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IPage) {
        try {
            let pageData: any = await this.pageDao.save(item);
            let returnData = {
                _id: item._id ? item._id : pageData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

}
