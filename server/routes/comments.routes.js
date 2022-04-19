import express from 'express'
import commentsCtrl from '../controllers/comments.controller'

const router = express.Router()

router.route('/api/comments')
    .get(commentsCtrl.list)
    .post(commentsCtrl.create)

router.route('/api/comments/:commentId')
    .put(commentsCtrl.update)
    .delete(commentsCtrl.remove)

router.param('commentId', commentsCtrl.commentByID)

export default router

