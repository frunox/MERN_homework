// all API calls route through this file first (by default)
// load node package path, used to build path names
// require express router
const path = require("path");
const router = require("express").Router();
// any routes related to books are defined in /books.js
const bookRoutes = require("./books");
// any routes related to the google books API are defined in /google.js
const googleRoutes = require("./google");

// Book routes -> routes to /routes/api/books.js
router.use("/books", bookRoutes);

// Google Routes -> routes to /routes/api/google.js
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
