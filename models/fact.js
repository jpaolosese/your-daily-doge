var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Comment = require('./comment');

var FactSchema = new Schema({
  factIndex: Number,
  text: String,
  image: String,
  comments: [ Comment.schema ]
});

var Fact = mongoose.model('Fact', FactSchema);
module.exports = Fact;
