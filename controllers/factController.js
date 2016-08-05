var db = require('../models');

// CRUD

// GET /api/facts
function index(req, res) {
  db.Fact.find({}, function(error, allFacts) {
    if (error) { console.log('ERROR: ' + error); }
    res.json(allFacts);
  });
}

// POST /api/facts
function create(req, res) {
  db.Fact.create(req.body, function(error, createdFact) {
    if (error) { console.log('ERROR: ' + error); }
    res.json(createdFact);
  });
}

// GET /api/facts/:factId
function show(req, res) {
  db.Fact.findById(req.params.factId, function(error, foundFact) {
    if (error) { console.log('ERROR: ' + error); }
    res.json(foundFact);
  });
}

// DELETE /api/facts/:factId
function destroy(req, res) {
  db.Fact.findOneAndRemove({_id: req.params.factId}, function(error, foundFact) {
    if (error) { console.log('ERROR: ' + error); }
    res.json(foundFact);
  });
}

// PUT /api/facts/:factId
function update(req, res) {
  db.Fact.findById(req.params.albumId, function(error, foundFact) {
    if (error) { console.log('ERROR: ' + error); }
    foundFact.text = req.body.text;
    foundFact.image = req.body.image;
    foundFact.save(function(error, updatedFact) {
      if (error) { console.log('Fact update failed: ' + error); }
      res.json(updatedFact);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
