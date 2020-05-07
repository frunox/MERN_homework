// this API file defines what happens when routes related to books are called
// requests are passed in from /routes/api/index.js
// the requests are then routed to /controllers/bookController.js
// define the router method from expess Router
const router = require("express").Router();
//  bookController provides the mongoose code for interacting with the database
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
// 2 database calls are made from the landing page - 1 to load a list of books, 1 to add (create) a new book.  Route calls start with "/api/books"
// this route handles "api/books/", calling methods in bookController.js for .get and .post requests
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
// this route handles "/api/books/:id", calling methods in bookController specific to a single book
// via the 'id' sent with the call.  The get request retrieves data on a specific book, the 
// put request modifies data, and delete removes a book from the database.
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

// export the routes for use in other modules
module.exports = router;
