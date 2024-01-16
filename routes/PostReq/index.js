const express = require("express");
const router = express.Router();
const { users } = require("../Data/Users");

router.post("/users/add", (request, response) => {
  const { body } = request;

  if (!body) return response.status(400).send({ msg: "Bad Request" });

  users.push(body);
  response.status(200).send(users);
});

router.delete("/users/remove", (request, response) => {
  const { body } = request;

  if (!body.id) return response.status(400).send({ msg: "Bad Request" });

  users.find((user) => user.id == body.id) && users.splice(body.id - 1, 1);
  response.status(200).send(users);
});

router.put("/users/update", (request, response) => {
  const { body } = request;

  if (!body) return response.status(400).send({ msg: "Bad Request" });

  users.find((user) => user.id == body.id) && (users[body.id - 1] = body);
  response.status(200).send(users);
});

module.exports = router;
