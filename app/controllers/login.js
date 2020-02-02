module.exports.Index = function(req, res) {
  res.render("login/index", { title: "login", content: "adjkbfkd zvak" });
};

module.exports.login = function(req, res) {
  console.log(req.body);
  let { username, password } = req.body;
  if (username == "admin" && password == "123") {
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect("/home");
  } else {
    res.send("Sifre sehvdir");
  }
  res.end();
};
