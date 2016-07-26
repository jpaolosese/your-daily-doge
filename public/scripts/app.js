$(document).ready(function() {
  console.log("app.js loaded and ready!");

  // gets shibe facts from database
  $.get('/api/facts').success(function (shibeFacts) {
    displayFact(shibeFacts[Math.round(Math.random() * (shibeFacts.length - 1))]);
  });

});

function displayFact(fact) {
  var $dogeFactHtml = $("#dogefact-template").html();
  var $dogeFactTemplate = Handlebars.compile($dogeFactHtml);
  var html = $dogeFactTemplate(fact);
  $("#dogefact").prepend(html);
}
