var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/your-daily-doge");

module.exports.Fact = require('./fact.js');