module.exports.Index = function(req, res) {
    res.render('contact/index', {title: 'Əlaqə',  content: 'Əlaqə səhifəsi'});
};

module.exports.Insert = function(req, res, article) {
  console.log("Əlaqə əlavə edildi");
};

module.exports.GetContacts = function(req, res) {
  res.send(
    new Promise(function(resolve, reject) {
      resolve("dkfsfv fsb fsdbk df");
    })
  );
};