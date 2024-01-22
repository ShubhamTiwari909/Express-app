const express = require("express");
const router = express.Router();
const { mockUserList } = require("../../Data/Users");

// Handle GET request to the root URL
router.get("/", (request, response) => {
  console.log(request.session);
  console.log(request.session.id);
  request.session.visited = true;
  response.status(200).send("Hello Sessions!");
});

// Handle GET request to the "/users" URL
router.get("/users", (request, response) => {
  console.log(request.session.id);
  response.status(200).send(mockUserList);
});

router.post("/auth", (request, response) => {
  const { body } = request;
  const { username, password } = body;
  const user = mockUserList.find((user) => user.username === username);
  if (!user || user.password !== password) return response.status(404).send({ msg: "User not found" });

  request.session.user = user;
  response.status(200).send(user);
});

router.get("/dashboard", (request, response) => {
  request.session.user ? response.status(200).send({msg:"Welcome to the Express dashboard"}) : response.status(404).send({ msg: "User not Authenticated" });
});

module.exports = router;
