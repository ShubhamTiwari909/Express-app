const express = require("express");
const app = express();
const routes = require("../routes/SimpleRoutes/index");
const query = require("../routes/QueryParams/index.js");
const postReq = require("../routes/PostReq/index.js");
const middleware = require("../routes/Middleware/index.js");
const validations = require("../routes/Validations/index.js");

// parse json data
app.use(express.json());

// Use the routes middleware for the corresponding routes
app.use("/", routes);
app.use("/query/", query);
app.use("/post/", postReq);
app.use("/middleware/", middleware);
app.use("/validation/", validations);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app