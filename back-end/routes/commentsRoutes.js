


import express from 'express';
import * as CommentsController from '../controller/commentsController.js';

const router = express.Router();

router.get('/', CommentsController.getComments);
router.post('/', CommentsController.addComment);
router.delete('/:id', CommentsController.deleteComment);


export default router;
