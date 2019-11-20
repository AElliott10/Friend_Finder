//Just setting up the connections
//have to be part of the same function because?
// =============================================================
var path = require("path");


module.exports = function(app){
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
    
    
    //Survey page - Basic route that sends user first to the Survey Page (http://friend_finder.herokuapp.com/survey?)
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    
    
    

