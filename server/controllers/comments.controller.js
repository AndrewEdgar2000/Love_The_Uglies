import Comment from '../models/comment.models';
import extend from 'lodash/extend';
import errorHandler from '../helpers/dbErrorHandler';

//Create comment 
const create = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        await comment.save();
        return res.status(200).json({
            message: "Successfully created comment!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

//List all comments
const list = async (req, res) => {
    try {
        let comments = await Comment.find().select('-__v');
        res.json(comments);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

//Get comment by id
const commentByID = async (req, res, next, id) => {
    try {
        let comment = await Comment.findById(id);
        if (!comment)
            return res.status('400').json({
                error: "Comment not found"
            });
        req.comment = comment;
        next();
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve comment"
        });
    }
};

//Update comment
const update = (req, res) => {
    extend(req.comment, req.body);
    req.comment.updated = Date.now();
    req.comment.save((err, comment) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(comment);
    });
};

//Remove comment
const remove = (req, res) => {
    let comment = req.comment;
    comment.remove((err, deletedComment) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(deletedComment);
    });
};

export default {
    create,
    list,
    commentByID,
    update,
    remove
};
