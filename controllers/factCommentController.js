var db = require('../models');

function index(req, res) {
  db.Fact.findById(req.params.factId, function(err, foundFact) {
    res.json(foundFact.comments);
  })
}

function create(req, res) {
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

  })
}



module.exports = {
  index: index,
}
