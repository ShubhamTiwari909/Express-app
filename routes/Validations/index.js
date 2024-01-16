const express = require("express");
const router = express.Router();
const { mockUserList } = require("../Data/Users");
const {
  query,
  validationResult,
  check,
  matchedData,
  // checkSchema,
} = require("express-validator");
// const validationConfig = require("./validationConfig");

/**
 * GET /users
 * Fetches a list of users based on filter and value
 *
 * @param {string} query.value - The value to filter the users
 * @returns {Array} - The list of users matching the filter and value
 */
router.get(
  "/users",
  query("value").isString().notEmpty(), // Validates the value parameter
  (request, response) => {
    const validations = validationResult(request);

    // Extract the filter and value from the query parameters if there are no validation errors
    const { query } = request;
    const { filter, value } = query;

    // If no filter and value provided, return the entire user list
    if (!filter && !value) {
      return response.status(200).send(mockUserList);
    }

    // Check if there are validation errors
    if (validations.errors.length !== 0) {
      return response.status(400).send({ msg: "Invalid value" });
    }

    // If both filter and value provided, filter the user list
    if (filter && value) {
      const filteredId = mockUserList.filter((user) =>
        user[filter].includes(value)
      );
      return response.status(200).send(filteredId);
    }
  }
);

// Define the validation rules
const validateUser = [
  check("username")
    .isString()
    .withMessage("Username should be a string value")
    .notEmpty()
    .withMessage("Username cannot be empty"),
  check("displayName")
    .isString()
    .withMessage("Display name should be a string value")
    .notEmpty()
    .withMessage("Display name cannot be empty"),
  check("id")
    .isString()
    .withMessage("Id should be a string value")
    .notEmpty()
    .withMessage("Id cannot be empty"),
];

router.post("/users/add", validateUser, (request, response) => {
  const validation = validationResult(request);
  const errors = [];
  if (!validation.isEmpty()) {
    validation.errors.map((error) => errors.push(error.msg));
    return response.status(400).send({ errorMsg: errors });
  }
  const data = matchedData(request);

  mockUserList.push(data);
  response.status(200).send(mockUserList);
});

module.exports = router;
