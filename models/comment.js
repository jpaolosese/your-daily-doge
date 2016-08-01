var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  commentText: String
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
