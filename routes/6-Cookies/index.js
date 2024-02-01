const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();

console.log("Checking the commit")

router.use(cookieParser());

router.get("/login", (request, response) => {

  // Demo login to add cookies
  response.cookie("isRegistered", "true", { maxAge: 60000 * 60 * 24 }); // 1 day
  response.cookie("userID", "12345", { maxAge: 60000 * 60 * 24 }); // 1 day
  
  if (!request.cookies.isRegistered) {
    response.status(200).send("Login to see users")
  }
  else {
    response.status(302).redirect("/users");
  }
});

module.exports = router;
