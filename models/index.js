var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/your-daily-doge");

module.exports.Fact = require('./fact.js');
module.exports.Comment = require('./comment.js');
