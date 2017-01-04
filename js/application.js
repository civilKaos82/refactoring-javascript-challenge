var responsesForEmptyQuestion = ["Go on. I'm listening.", "Don't be shy. Let's hear it.", "How can I help you?", "Did you want to ask something?", "Something on your mind?", "Well ... ?"]

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
    }
  });
});
