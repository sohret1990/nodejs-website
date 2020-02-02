const express = require('express');
const router = express.Router();


let article = require("../app/controllers/article");
let about = require("../app/controllers/about");
let contact = require("../app/controllers/contact");
let category = require("../app/controllers/categories");
let path = require("path");
let login = require("../app/controllers/login");



module.exports = function(app) {
  app.get("/login", login.Index).post("/login", login.login);


  app
    .get("/", article.Index)
    .get("/article", article.Index)
    .post("/article/Insert", article.Insert);

    app.get("/about", about.Index).post("/about/Insert", about.Insert);

    app
    .get("/category", category.Index)
    .get("/category/index", category.Index)
    .get("/category/LoadCategoryJsonList", category.LoadCategoryJsonList)
    .get("/category/edit?:id", category.GetEdit)
    .post("/category/edit", category.edit);

    app.get("/contact", contact.Index).post("/contact/Insert", contact.Insert);
};


