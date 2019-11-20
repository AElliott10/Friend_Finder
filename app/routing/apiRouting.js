// Question: What does this code do?
//JQUERY YOU ARE MAKING AN AJAX REQUEST TO REACH OUR OWN API this is how you create your own API
/*$("#add-btn").on("click", function (event) {
  event.preventDefault();
  var updateSurvey = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: $("#scores").val().trim()
  };

  // Question: What does this code do??
  $.post("/api/survey", updateSurvey)
      .then(function (data) {
          console.log("survey.html", data);
          alert("Updating survey...");
      });
});
*/

module.exports = function(app){
  app.get("/api/survey", function(req, res) {
    return res.json(survey);
  });

  // Capture Survey information - takes in JSON input
app.post("/api/survey", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newSurvey = req.body;
  
    console.log(newSurvey);
  
    survey.push(newSurvey);
  
    res.json(newSurvey);
  });

}
// Displays all possible friends


