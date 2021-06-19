import express from 'express';
import {getCalendarPosts,createCalendarPost} from '../controllers/calendarPosts.js';
const router = express.Router();

router.get('/',getCalendarPosts);
router.post('/',createCalendarPost);

export default router;