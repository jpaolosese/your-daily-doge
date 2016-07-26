var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FactSchema = new Schema({
  factIndex: Number,
  text: String,
  image: String
});

var Fact = mongoose.model('Fact', FactSchema);
module.exports = Fact;
