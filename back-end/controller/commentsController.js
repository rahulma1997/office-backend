
import * as CommentsModel from '../model/commentsModel.js';

const getComments = async (req, res) => {
  try {
    const comments = await CommentsModel.getAllComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

const addComment = async (req, res) => {
  const { text } = req.body;
  if (text) {
    try {
      const newComment = await CommentsModel.addComment({ text });
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: 'Error adding comment' });
    }
  } else {
    res.status(400).json({ message: 'Comment text is required' });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CommentsModel.deleteComment(id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comment' });
  }
};



export {
  getComments,
  addComment,
  deleteComment,
};
