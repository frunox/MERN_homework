// this API file defines what happens when routes related to the google books API are called
// requests are passed in from /routes/api/index.js
// the requests are then routed to /controllers/googleController.js
// define the router method from expess Router
const router = require("express").Router();
//  googleController provides the code for interacting with the google books API the database
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
// uses router to call 'api/google/' to call the mongoose .findAll method, detail of which are in the googleController
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
