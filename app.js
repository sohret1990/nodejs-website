const port = process.env.port || 3000;
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");



const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);



app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");
app.use(express.static(__dirname + "/public"));

require("./config/routes.js")(app);


app.listen(port, () => {
  console.log(`Server started on port`);
});

exports = module.exports = app;
