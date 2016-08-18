var db = require('../models');

// GET /api/facts/:factId/comments
function index(req, res) {
  db.Fact.find({}, function(err, foundFact) {
    res.json(foundFact.comments);
  })
}

// POST /api/facts/:factId/comments
function create(req, res) {
  db.Fact.findById(req.params.factId, function(err, foundFact) {
    var body = req.body;
    var newComment = new db.Comment(body);
    foundFact.comments.push({"commentText": newComment});
    foundFact.save(function(error, updatedFact) {
      res.json(newComment);
    });
  });
}

// TODO: Connect this endpoint to the front end
// DELETE /api/facts/:factId/comments/:commentId
function destroy(req, res) {
  db.Fact.findById(req.params.factId, function(error, foundFact) {
    var foundCommentId = req.params.commentId;
    var foundComment = foundFact.comments.id(foundCommentId);
    if (foundComment) {
      foundComment.remove();
      foundFact.save(function(error, updatedFact) {
        res.json(foundComment);
      });
    }
    else {
      console.log('ERROR');
      res.send(404);
    }
  });
}

// TODO: Connect this endpoint to the front end
function update(req, res) {
  db.Fact.findById(req.params.factId, function(error, foundFact) {
    var foundCommentId = req.params.commentId;
    var foundComment = foundFact.comments.id(foundCommentId);
    if (foundComment) {
      foundComment.commentText = req.body.commentText;
      foundFact.save(function (error, updatedFact) {
        res.json(foundComment);
      });
    }
    else {
      console.log('ERROR');
      res.send(404);
    }
  });
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update
}
