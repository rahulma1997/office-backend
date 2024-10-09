

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
  liked: { type: Boolean, default: false },
});

const Comment = mongoose.model('Comment', commentSchema);

const getAllComments = async () => {
  return await Comment.find();
};




const addComment = async (comment) => {
  const newComment = new Comment(comment);
  await newComment.save();
  return newComment;
};


const deleteComment = async (id) => {
  return await Comment.findByIdAndDelete(id);
};

export {
  getAllComments,
  addComment,
  deleteComment,
};
