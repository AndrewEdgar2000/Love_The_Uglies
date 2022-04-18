import express from 'express';
import eventCtrl from '../controllers/event.controller';

const router = express.Router();

router.route('/api/events')
    .get(eventCtrl.list)
    .post(eventCtrl.create);

router.route('/api/events/:eventId')
    .put(eventCtrl.update)
    .delete(eventCtrl.remove);

router.param('eventId', eventCtrl.eventByID);

export default router;
