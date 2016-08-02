var dogeFactHtml;
var dogeFactTemplate;

$(document).ready(function() {

  // gets single shibe fact from database
  renderShibe();

  $("button").click(renderShibe);

  dogeFactHtml = $("#dogefact-template").html();
  dogeFactTemplate = Handlebars.compile(dogeFactHtml);

});



// The code to compile your template should be moved outside of the render function.
// The template does not need to be recompiled each time that render is called.
// You can define dogeFactHtml and dogeFactTemplate globally (on lines 1 and 2), then assign them to the page content once the HTML
// has loaded (lines 11 and 12)
// Then, you can insert each fact into the HTML template as needed
function displayFact(fact) {
  var html = dogeFactTemplate(fact);
  $("#dogefact").html(html);
}

// This function isn't needed
// function replaceFact(fact) {
//   var dogeFactHtml = $("#dogefact-template").text($("#dogefact-template").html());
//   var dogeFactTemplate = Handlebars.compile(dogeFactHtml);
//   var html = dogeFactTemplate(fact);
//   $("#dogefact").empty();
//   $("#dogefact").html(html);
// }

// This function can be defined once then called on page load and when someone clicks your button
function renderShibe() {
  $.get('/api/facts').success(function (shibeFacts) {
    displayFact(shibeFacts[Math.round(Math.random() * (shibeFacts.length - 1))]);
  });
}

// This function isn't needed
// function replaceContentInContainer(id, content) {
//   var container = document.getElementById(id);
//   container.innerHTML = content;
// }
