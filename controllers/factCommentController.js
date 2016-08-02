var db = require('../models');

function index(req, res) {
  db.Fact.findById(req.params.factId, function(err, foundFact) {
    // You could use some error handling. What if a fact isn't found?
    res.json(foundFact.comments);
  });
}

function create(req, res) {
  // TODO: Get rid of Tunely code (it's perfectly fine to reference Tunely, but don't copy/paste)
  // Looks like you're translating it into your own method below, which is great
  // db.Album.findById(req.params.albumId, function(err, foundAlbum) {
  //   console.log(req.body);
  //   var newSong = new db.Song(req.body);  // dangerous, in a real app we'd validate the incoming data
  //   foundAlbum.songs.push(newSong);
  //   foundAlbum.save(function(err, savedAlbum) {
  //     console.log('newSong created: ', newSong);
  //     res.json(newSong);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
  //   });
  // });
  db.Fact.findById(req.params.factId, function(err, foundFact) {
    console.log(req.body);
    var newComment = new db.Comment(req.body);
    // Remember to save and return the newly created comment as JSON
  });
}

// TODO: Built out all CRUD actions for comments
// function show(req, res) etc...
// function edit(req, res) etc...
// function destroy(req, res) etc...



module.exports = {
  index: index,
  // You'll need to export the create function, like you did with index
};
