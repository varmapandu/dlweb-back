import * as mongoose from "mongoose";

class BaseDAO<T extends mongoose.Document>{

    protected model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    create(item: T) {
        return this.model.create(item);
    }

    retrieve(query: object) {
        return this.model.find(query);
    }

    update(_id: mongoose.Types.ObjectId, item: T) {
        return this.model.update({ _id: _id }, item);
    }

    save(item: T) {
        const _id: mongoose.Types.ObjectId = item._id;
        if (_id) {
            return this.update(_id, item);
        } else {    
            return this.create(item);
        }
    }

    edit(_id, item: T) {
        return this.model.findOneAndUpdate({ _id: _id }, item, { upsert: true, new: true })
    }

    delete(_id: string) {
        return this.model.remove({ _id: this.toObjectId(_id) });
    }

    findById(_id: string) {
        return this.model.findById(_id);
    }

    aggregate(cond?: Object, fields?: Object, options?: Object){
        return this.model.aggregate(cond, fields, options);
    }

    findOne(cond?: Object, fields?: Object, options?: Object) {
        return this.model.findOne(cond, fields, options);
    }

    find(cond?: Object, fields?: Object, options?: Object) {
        return this.model.find(cond, fields, options);
    }

    findOneAndUpdate(cond?: Object, options?: Object) {
        return this.model.findOneAndUpdate(cond, options, {new: true });
    }


    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}

export { BaseDAO };
