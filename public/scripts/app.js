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
  $.get('/api/facts').success(function (shibeFacts) {
    displayFact(shibeFacts[Math.round(Math.random() * (shibeFacts.length - 1))]);
  });
}

function replaceContentInContainer(id, content) {
  var container = document.getElementById(id);
  container.innerHTML = content;
}
