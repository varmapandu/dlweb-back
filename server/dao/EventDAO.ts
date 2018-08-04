import { BaseDAO } from "./../config/BaseDAO";
import {IEvent} from "./../models/interfaces/IEvent";
import {Event} from "./../models/schemas/Event";
import { Aggregate } from "mongoose";

export class EventDAO  extends BaseDAO<IEvent> {
    constructor () {
        super(Event);
    }
}

Object.seal(EventDAO);
