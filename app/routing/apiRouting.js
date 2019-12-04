
//had to make it a function to get it into a module.export; so that you can connect with other parts of the application.

var friends = require('../data/friends');
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  })

  app.post('/api/friends', function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendsDifference: 1000
    }

    //Here is were we take the survey POST(results) and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // console.log("=====");
    // console.log("scores: ", userScores);
    // console.log("=====");
    // console.log("userData: ", userData);
    // console.log("=====");

    var totalDifference = 0;

    //Nested for loop first to go through all the friends in the database
    for (var i = 0; i < friends.length; i++) {
      console.log("1st for loop "); console.log(friends[i]);
      totalDifference = 0;
      //Then loop through the scores of each friend
      for (let j = 0; j < friends[i].scores[j]; j++) {

        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
      }
      console.log("total diff: ", totalDifference);
      if (totalDifference <= bestMatch.friendsDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendsDifference = totalDifference;
      }
    }
    console.log("userData: ", userData);
    friends.push(userData);
    console.log("friends array: ", friends);
    res.json(bestMatch);
  });
}