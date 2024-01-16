const validationConfig = {
  id: {
    isString: {
      errorMessage: "Id should be a string value",
    },
    notEmpty: {
      errorMessage: "Id cannot be empty",
    },
  },
  username: {
    isString: {
      errorMessage: "Username should be a string value",
    },
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
  },
  displayName: {
    isString: {
      errorMessage: "Display name should be a string value",
    },
    notEmpty: {
      errorMessage: "Display name cannot be empty",
    },
  },
};

module.exports = validationConfig