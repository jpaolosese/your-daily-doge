var shibaFacts = [
  {
    factIndex: 0,
    text: "The Duke of Venice, known as the Doge di Venezia, was at times an actual Shiba Inu.",
    image: "http://i.imgur.com/tXWEmL8.jpg"
  },
  {
    factIndex: 1,
    text: "The Shiba Inu arrived on Earth in the 4th century CE.",
    image: "http://i.imgur.com/wp9Qr8V.gif"
  },
  {
    factIndex: 2,
    text: "Shiba Inu is Japanese for brushwood dog.",
    image: "http://66.media.tumblr.com/tumblr_lqg2t1NYuK1qf9be8o1_500.jpg"
  },
  {
    factIndex: 3,
    text: "The Shiba Inu is the smallest of the ten major dog breeds.",
    image: "https://s-media-cache-ak0.pinimg.com/736x/04/73/a5/0473a53d951f113ed575fcbc2dc31792.jpg"
  },
  {
    factIndex: 4,
    text: "The anime Shiba Inuko-san is about a 14 year old girl who just happens to look like an upright walking Shiba Inu.",
    image: "http://i.imgur.com/puLhV3Y.gif"
  },
  {
    factIndex: 5,
    text: "The Shiba Inu can, at times, be a total piece of shit.",
    image: "http://i.imgur.com/mlGlJbq.gif"
  },
  {
    factIndex: 6,
    text: "Bodhi is a Shiba clothing model from New York.",
    image: "http://i.imgur.com/QZPkMCU.jpg"
  },
  {
    factIndex: 7,
    text: "Shibas are virtually indistinguishable from marshmallows.",
    image: "http://i.imgur.com/MWuRMm6.png"
  },
  {
    factIndex: 8,
    text: "Shibas grow well in sandy soils.",
    image: "http://i.imgur.com/r4hCn41.jpg"
  }
  {
    factIndex: 9,
    text: "Brought to you by The Doge Times.",
    image: "http://i.imgur.com/uYz0AvW.jpg"
  }
];

$(document).ready(function() {
  console.log("app.js loaded and ready!");
  displayFact(shibaFacts[Math.round(Math.random() * (shibaFacts.length - 1))]);
});

function displayFact(fact) {
  var $dogeFactHtml = $("#dogefact-template").html();
  var $dogeFactTemplate = Handlebars.compile($dogeFactHtml);
  var html = $dogeFactTemplate(fact);
  $("#dogefact").prepend(html);
}
