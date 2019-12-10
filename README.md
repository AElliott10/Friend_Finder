# Friend_Finder
https://shielded-wave-02579.herokuapp.com/survey
Friend Finder
1. Set up your server leverage file server.js; create npm init to create the package json/node modules/package-lock.json; then install npm packages - npm install, npm i express
2. Then set up your folders: App and the following folders: data/public/routing
    Data - data base will be JS file vs mySql called friends.js
    Public - holds all HTML files to be seen by the client and images create home.html and survey.html
    Routing - html routes- routes to deliver html files to our client
            - api routes that deliver data from the front-end(survey form) to the back-end and back-end to front-end
3. Create HTML Home Page   
4. Create Survey page - leverage chosen bootstrap method to create survey
    Three sections to the survey page:
    A. HTML - Survey Form
    B. HTML - Modal - to display matches
    C.  Javascript to: 
        1. incorporate Chosen code 
        2. click event listener with validateForm logic
        3. If form is valid then it takes the data and POSTS it to friends.js so that the matching logic is completed, then it pulls the matches to be displayed in the modal
5. Create HTML Routes - htmlRoutes.js and linked in the server.js file so that HTML pages can be delivered to the end-user. Create 2 routes
        1. Home Page 
        2. Survey Page 
6. Create the database given we are not leveraging mySQL - create array of people in friend.js
7. Create your API route in apiRouting.js file
