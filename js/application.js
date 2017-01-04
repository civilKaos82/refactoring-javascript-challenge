var responsesForEmptyQuestion = ["Go on. I'm listening.", "Don't be shy. Let's hear it.", "How can I help you?", "Did you want to ask something?", "Something on your mind?", "Well ... ?"]
var responsesForStatement     = ["Is that a question?", "I can only answer questions."]

$(document).ready(function() {
  $("#ask-button").on("click", function() {
    var question = $("#question").val();

    if(question === "") {
      // Get a random item from responsesForEmptyQuestion
      var response = responsesForEmptyQuestion[Math.floor(Math.random() * responsesForEmptyQuestion.length)];

      $("#answer").fadeOut(600, function() {
        setTimeout(function() {
          $("#answer").text(response).fadeIn(600);
        }, 400)
      });
    } else if(!(/\?$/.test(question))) { // Use RegExp.prototype.test() to check for a question mark
      var response = responsesForStatement[Math.floor(Math.random() * responsesForStatement.length)];

      $("#answer").fadeOut(600, function() {
        setTimeout(function() {
          $("#answer").text(response).fadeIn(600);
        }, 400)
      });
    }
  });
});
