var db = require("./models");

var shibaFacts = [
  {
    factIndex: 1,
    text: "The Duke of Venice, known as the Doge di Venezia, was at times an actual Shiba Inu.",
    image: "https://i.imgur.com/tXWEmL8.jpg"
  },
  {
    factIndex: 2,
    text: "The Shiba Inu arrived on Earth in the 4th century CE.",
    image: "https://i.imgur.com/wp9Qr8V.gif"
  },
  {
    factIndex: 3,
    text: "Shiba Inu is Japanese for brushwood dog.",
    image: "https://66.media.tumblr.com/tumblr_lqg2t1NYuK1qf9be8o1_500.jpg"
  },
  {
    factIndex: 4,
    text: "The Shiba Inu is the smallest of the ten major dog breeds.",
    image: "https://s-media-cache-ak0.pinimg.com/736x/04/73/a5/0473a53d951f113ed575fcbc2dc31792.jpg"
  },
  {
    factIndex: 5,
    text: "The anime Shiba Inuko-san is about a 14 year old girl who just happens to look like an upright walking Shiba Inu.",
    image: "https://i.imgur.com/puLhV3Y.gif"
  },
  {
    factIndex: 6,
    text: "The Shiba Inu can, at times, be a total piece of shit.",
    image: "https://i.imgur.com/mlGlJbq.gif"
  },
  {
    factIndex: 7,
    text: "Bodhi is a Shiba clothing model from New York.",
    image: "https://i.imgur.com/QZPkMCU.jpg"
  },
  {
    factIndex: 8,
    text: "Shibas are virtually indistinguishable from marshmallows.",
    image: "https://i.imgur.com/MWuRMm6.png"
  },
  {
    factIndex: 9,
    text: "Shibas grow well in sandy soils.",
    image: "https://i.imgur.com/r4hCn41.jpg"
  },
  {
    factIndex: 10,
    text: "Brought to you by The Doge Times.",
    image: "https://i.imgur.com/uYz0AvW.jpg"
  },
  {
    factIndex: 11,
    text: "Shibas can be total assholes sometimes.",
    image: "https://i.imgur.com/C1U1yRj.jpg"
  },
  {
    factIndex: 12,
    text: "What Shibas look like when they ripen.",
    image: "https://i.imgur.com/uP18cDm.jpg"
  }
];

var sampleComments = [];
sampleComments.push({ commentText: 'Wow such comment' });

shibaFacts.forEach(function (fact) {
  fact.comments = sampleComments;
});

db.Fact.remove({}, function(err, facts){
  db.Fact.create(shibaFacts, function(err, facts){
    if (err) { return console.log('ERROR', err); }
    console.log("all facts:", facts);
    console.log("created", facts.length, "facts");
    process.exit();
  });
});
