import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    },
    date: {
        type: String,
        trim: true,
        required: 'Date is required'
    },
    extended_description: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
        required: 'Location is required'
    },
    created: {
        type: Date,
        default: Date.now
    }, 
    event_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Event'
    }, 
    event_creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
})


const eventModel = mongoose.model('Event', EventSchema);
eventModel.createIndexes();
export default eventModel;