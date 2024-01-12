const express = require("express");
const router = express.Router();
const {users} = require("../Data/Users")

// Handle GET request to the root URL
router.get("/", (request, response) => {
  // Send a 200 status code and the "Hello World!" message as the response
  response.status(200).send("Hello World!");
});

// Handle GET request to the "/users" URL
router.get("/users", (request, response) => {
  // Send a 200 status code and the "users" data as the response
  response.status(200).send(users);
});

// Get user by ID
router.get("/users/:id", (request, response) => {
  // Extract the id from request parameters
  const { id } = request.params;

  // Find the user with the matching id
  const filteredId = users.find((user) => user.id == parseInt(id));

  // If no user is found or the id is not a number, return a 404 error response
  if (!filteredId || isNaN(id)) {
    response.status(404).send({ msg: "User not found" });
  }

  // Return the filtered user as a success response
  response.status(200).send(filteredId);
});

module.exports = router;