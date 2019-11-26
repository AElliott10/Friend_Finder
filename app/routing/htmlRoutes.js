//Just setting up the route/connection with the server and the HTML pages to make it easier to send pages to the end user.
// =============================================================
var path = require("path");

//do this so that you can include these paths in the server file; make a module export function so that it can be levered in the server.js file.
module.exports = function(app){
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
}
    
    
    

