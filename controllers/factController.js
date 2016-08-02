var db = require('../models');

// CRUD

// GET /api/facts
function index(req, res) {
  db.Fact.find({}, function(err, allFacts) {
    res.json(allFacts);
  });
}

// TODO: Please build out all controller actions for Facts, even if thery're not available to the user
// function show(req, res) etc...
// function edit(req, res) etc...
// function destroy(req, res) etc...

module.exports = {
  index: index
};
