$(document).ready(function() {

  // gets single shibe fact from database
  $.get('/api/facts').success(function (shibeFacts) {
    displayFact(shibeFacts[Math.round(Math.random() * (shibeFacts.length - 1))]);
  });

  $("button").click(handleClick);
});

function displayFact(fact) {
  var dogeFactHtml = $("#dogefact-template").html();
  var dogeFactTemplate = Handlebars.compile(dogeFactHtml);
  var html = dogeFactTemplate(fact);
  $("#dogefact").html(html);
}

function replaceFact(fact) {
  var dogeFactHtml = $("#dogefact-template").text($("#dogefact-template").html());
  var dogeFactTemplate = Handlebars.compile(dogeFactHtml);
  var html = dogeFactTemplate(fact);
  $("#dogefact").empty();
  $("#dogefact").html(html);
}

function handleClick(event) {
  event.preventDefault();
  console.log("wow such click " + event);
  $.get('/api/facts').success(function (shibeFacts) {
    replaceFact(JSON.stringify(shibeFacts[Math.round(Math.random() * (shibeFacts.length - 1))]));
  });
}
