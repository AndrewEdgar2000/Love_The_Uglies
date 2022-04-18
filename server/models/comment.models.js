import mongoose from 'mongoose'

//Create User Schema for comments 
const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        trim: true,
        required: 'Comment is required'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    },
    comment_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
    }
})

const commentModel = mongoose.model('Comment', CommentSchema);
commentModel.createIndexes();
export default commentModel;


