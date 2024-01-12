const express = require("express");
const app = express();
const routes = require("../SimpleRoutes/index");
const query = require("../QueryParams/index.js");
const postReq = require("../PostReq/index.js");

// parse json data
app.use(express.json());

// Use the routes middleware for the corresponding routes
app.use("/", routes);
app.use("/query/", query);
app.use("/post/", postReq);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app