const express = require("express");
const router = express.Router();
const { users } = require("../../Data/Users");

const checkReqBody = (request, response, next) => {
  const { body } = request;
  
  if (!body || Object.keys(body).length === 0) {
    return response.status(404).send({ msg: "Body not found" });
  }
  request.body = body;

  next();
};

router.use(checkReqBody)

// Add a user
router.post("/users/add", (request, response) => {
  const { body } = request;

  users.push(body);
  response.status(200).send(users);
});

// Remove a user
router.delete("/users/remove", (request, response) => {
  const { body } = request;

  if (!body.id) return response.status(400).send({ msg: "Id not defined" });

  users.find((user) => user.id == body.id) && users.splice(body.id - 1, 1);
  response.status(200).send(users);
});

// Update an existing user
router.put("/users/update", (request, response) => {
  const { body } = request;
  
  users.find((user) => user.id == body.id) && (users[body.id - 1] = body);
  response.status(200).send(users);
});

module.exports = router;
