const express = require("express");
const router = express.Router();
const { users } = require("../../Data/Users");

// Handle GET request to the root URL
router.get("/", (request, response) => {
  response.status(200).send("Hello World!");
});


// Handle GET request to the "/users" URL
router.get("/users", (request, response) => {
  response.status(200).send(users);
});


// Get user by ID
router.get("/users/:id", (request, response) => {
  const { id } = request.params;

  const filteredId = users.find((user) => user.id == parseInt(id));

  if (!filteredId || isNaN(id)) {
    response.status(404).send({ msg: "User not found" });
  }

  // Return the filtered user as a success response
  response.status(200).send(filteredId);
});

module.exports = router;
