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

  // TODO: All of your AJAX requests need error handling

  // TODO: This GET request is getting all of the comments currently in your database and rendering them for the current Shibe
  // This is happening regardless of the chosen Shibe, meaning that a SpaceShibe comment will show up for Marshmallow Shibe
  // This needs to be fixed
  $.get('/api/facts').success(function (facts) {
    facts.forEach(function (comment) {
      renderComment(comment);
    });
  });

  // Handle comment submission
  $('#comment-submit').submit(function handleCommentSubmit(e) {
    e.preventDefault();
    // TODO: This variable could be named better. Maybe $commentForm?
    var $comment = $(this);
    var commentData = $comment.serialize();

    // TODO: This post route is going to add the comment to a random Shibe, not the one that's currently being viewed
    // This needs to be fixed and tied to the Shibe that was randomly found in your
    // renderShibe() funciton
    $.post('/api/facts/' + (Math.floor((Math.random() * 12) + 1)), commentData, function(comment) {
      renderComment(comment);
    });
    $comment.trigger('reset');
  });

});

// TODO: Remove these comments. They're leftover from my last round of feedback.
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


// TODO: Think about the big-picture flow of what's happening on your page. I'd suggest implementing the following

// 1) A GET request is made to get ALL Shibefacts
// 2) A fact is randomly selected from the array that is returned and rendered to the page.
//  The ID of that fact is somehow isolated (set to a variable, perhaps?) so comments can be CRUDed on the correct fact
// 3) A GET request is made for all comments associated with *that* Shibe
    // api/facts/:fact_id/comments
    // The resulting array of comments is rendered
// 4) If a user types out a new comment and submits it, a POST request should be sent to api/facts/:fact_id/comments
      // for *the currently rendered Shibe*
// 5) Users should be able to edit or delete comments (goal: full CRUD for at least one model)
