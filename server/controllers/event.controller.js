import Event from '../models/event.models';
import extend from 'lodash/extend';
import errorHandler from '../helpers/dbErrorHandler';

//create event
const create = async (req, res) => {
    const event = new Event(req.body);
    try {
        await event.save();
        return res.status(200).json({
            message: "Successfully created event!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

//list all events
const list = async (req, res) => {
    try {
        let events = await Event.find().select('-__v');
        res.json(events);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

//get event by id
const eventByID = async (req, res, next, id) => {
    try {
        let event = await Event.findById(id);
        if (!event)
            return res.status('400').json({
                error: "Event not found"
            });
        req.event = event;
        next();
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve event"
        });
    }
};

//update event
const update = (req, res) => {
    extend(req.event, req.body);
    req.event.updated = Date.now();
    req.event.save((err, event) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(event);
    });
};

//remove event
const remove = (req, res) => {
    let event = req.event;
    event.remove((err, deletedEvent) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedEvent);
    });
};


export default {
    create,
    list,
    eventByID,
    update,
    remove
};

