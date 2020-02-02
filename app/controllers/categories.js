let db = require("../models/db").db;
let router = require('../../config/routes');


module.exports.Index = function(req, res) {
  res.render("category/Index", { title: "Kateqoriyalar" });
};

module.exports.GetEdit = function(req, res) {
  let id = req.query.id;
  db.SelectById("categories", { id: id })
    .then(data => {
      res.render("../views/category/edit.ejs", {
        title: "Bölmələr",
        content: "Kateqoriyalar səhifəsi",
        cat: data
      });
    })
    .catch(err => {
      res.render("../views/category/edit.ejs", {
        title: "Bölmələr",
        content: "Kateqoriyalar səhifəsi",
        cat: []
      });
    });
};

module.exports.edit = function(req, res, next) {
  db.SelectById("categories", { _id: req.body._id })
    .then(data => {
      let category = {
        id: req.body.id,
        _id: req.body._id,
        name: req.body.name
      };

      if (data != null) {
      } else {
        db.Insert("categories", category)
          .then(data => {
            res.render("category/index",  { title: "Kateqoriyalar" });
          })
          .catch(err => {
             res.render("category/index",  { title: "Kateqoriyalar" });
          });
      }
    })
    .catch(err => {
       res.render( "category/index", {title: err.toString()});
    });

    res.render("category/index", {title: 'Db closed'});
};

module.exports.LoadCategoryJsonList = function(req, res) {
  let { length, draw, start, search } = req.query;
  let filter = {};
  if (search != null && search != undefined && search.value != "")
    filter = { name: new RegExp(search.value, "i") };

  db.GetList("categories", filter, Number(length), Number(start), Number(draw))
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send([]);
    });
};
