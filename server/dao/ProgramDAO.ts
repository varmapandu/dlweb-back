import { BaseDAO } from "./../config/BaseDAO";
import { IProgram } from "./../models/interfaces/IProgram";
import { Program } from "./../models/schemas/Program";

export class ProgramDAO extends BaseDAO<IProgram> {
    constructor() {
        super(Program);
    }

    save(item: IProgram) {
        return super.save(item);
    }
    
    retrieve(query: object) {
        return super.retrieve(query);
    }

    allProgramPage(){
            return super.find("_id name description views share rating slug coverImage coverImageAlt").sort({position:1});
    }

    allfuture(){
        return super.find({programType:"Future"},"_id name description views share rating slug coverImage coverImageAlt").sort({position:1});
}

    list(item){
        return super.find(item,"_id name slug").sort({position:1});
    }

    specific(item){
        return super.find(item,"_id name description views share rating slug coverImage coverImageAlt").sort({position:1});
    }

}

Object.seal(ProgramDAO);
