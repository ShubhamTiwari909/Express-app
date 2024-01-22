const express = require("express");
const session = require("express-session");
const app = express();
const routes = require("../routes/1-SimpleRoutes/index");
const query = require("../routes/2-QueryParams/index.js");
const middleware = require("../routes/3-Middleware/index.js");
const postReq = require("../routes/4-PostReq/index.js");
const validations = require("../routes/5-Validations/index.js");
const cookies = require("../routes/6-Cookies/index.js");
const sessions = require("../routes/7-Sessions/index.js");

// parse json data
app.use(express.json());

// session management
app.use(
  session({
    secret: "waadu",
    saveUninitialized: false,
    resave: true,
    cookie: {
      maxAge: 60000 * 60 * 24
    }
  })
);

// Use the routes middleware for the corresponding routes
app.use("/", routes);
app.use("/query/", query);
app.use("/middleware/", middleware);
app.use("/post/", postReq);
app.use("/validation/", validations);
app.use("/cookies/", cookies);
app.use("/sessions/", sessions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
