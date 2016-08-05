var dogeFactHtml;
var dogeFactTemplate;

var dogeCommentHtml;
var dogeCommentTemplate;

$(document).ready(function() {

  // fact-related actions
  renderShibe();
  $("button").click(renderShibe);

  dogeFactHtml = $("#dogefact-template").html();
  dogeFactTemplate = Handlebars.compile(dogeFactHtml);

  // comment related actions

  dogeCommentHtml = $("#comment-template").html();
  dogeCommentTemplate = Handlebars.compile(dogeCommentHtml);

  //displays premade comments on ready
  $.get('/api/facts').success(function (facts) {
    facts.forEach(function (comment) {
      renderComment(comment);
    });
  });

  // Handle comment submission
  $('#comment-submit').submit(function handleCommentSubmit(e) {
    e.preventDefault();
    var $comment = $(this);
    var commentData = $comment.serialize();

    $.post('/api/facts/' + (Math.floor((Math.random() * 12) + 1)), commentData, function(comment) {
      renderComment(comment);
    });
    $comment.trigger('reset');
  });

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

// This function can be defined once then called on page load and when someone clicks your button
function renderShibe() {
  $.get('/api/facts').success(function (shibeFacts) {
    displayFact(shibeFacts[Math.round(Math.random() * (shibeFacts.length -1))]);
  });
}

function renderComment(comment) {
  // var commentHtml = $("#comment-template").html();
  // var commentTemplate = Handlebars.compile(commentHtml);
  var html = dogeCommentTemplate(comment);
  $('#comments').html(html);
}
