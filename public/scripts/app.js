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

];

$(document).ready(function() {
  console.log("app.js loaded and ready!");
  displayFact(shibaFacts[Math.round(Math.random() * (shibaFacts.length-1))]);
});

function displayFact(fact) {
  var $dogeFactHtml = $("#dogefact-template").html();
  var $dogeFactTemplate = Handlebars.compile($dogeFactHtml);
  var html = $dogeFactTemplate(fact);
  $("#dogefact").prepend(html);
}
