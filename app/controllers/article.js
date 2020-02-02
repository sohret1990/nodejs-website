let cnn = require("../models/db");

module.exports.Index = function(req, res) {
  res.render("home/index", {
    title: "Başlıq"
  });
};

module.exports.Insert = function(req, res, article) {
  console.log("article inserted");
};

module.exports.GetArticles = function(req, res) {
  res.send(
    new Promise(function(resolve, reject) {
      resolve("dkfsfv fsb fsdbk df");
    })
  );
};
