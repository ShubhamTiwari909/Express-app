const express = require("express");
const router = express.Router();

// Middleware
const UrlSlug = (request, response, next) => {
  console.log(`Url Slug - ${request.url}`);
  next();
};

// Method 1 to use middleware for all routers - multiple middlewares?
// router.use(UrlSlug);

// Method 2 to middleware for a particular router
router.get("/signup",UrlSlug, (request, response) => {
  // Send a 200 status code and the "Hello World!" message as the response
  response.status(200).send("Hello Middleware");
});
module.exports = router;
