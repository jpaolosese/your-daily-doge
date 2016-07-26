var db = require('../models');

// CRUD

// GET /api/facts
function index(req, res) {
  db.Fact.find({}, function(err, allFacts) {
    res.json(allFacts);
  });
}

module.exports = {
  index: index
};
