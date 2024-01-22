const express = require("express");
const router = express.Router();
const { mockUserList } = require("../../Data/Users");

// Handle GET request to the "/users" URL
router.get("/users", (request, response) => {
  const { query } = request;

  const { filter, value } = query;

  if (!filter && !value) {
    response.status(200).send(mockUserList);
  }

  if (filter && value) {
    const filteredUser = mockUserList.filter((user) =>
      user[filter].includes(value)
    );
    response.status(200).send(filteredUser);
  }
});

module.exports = router;
