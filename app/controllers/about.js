module.exports.Index = function(req, res) {
    res.render('about/index', {title: 'About',  content: 'About page'});
};

module.exports.Insert = function(req, res, article) {
  console.log("about inserted");
};

module.exports.GetAbout = function(req, res) {
  res.send(
    new Promise(function(resolve, reject) {
      resolve("dkfsfv fsb fsdbk df");
    })
  );
};