const MongoClient = require("../../node_modules/mongodb").MongoClient;
const connstr = "mongodb://localhost:27017/qebelepress";
const dbname = "qebelepress";

module.exports.db = {
  Insert: function(document, data) {
    return new Promise(function(resolve, reject) {

      MongoClient.connect(connstr)
        .then(db => {
          const dbo = db.db(dbname);

          dbo.collection(document).insertOne(data)
          .then((err, doc) => {
            if (err) reject(err);

            resolve(doc);
          });
        })
        .catch(err => {
          reject(err);
        });
      db.close();
    });
  },
  

  Delete: function() {
    return new Promise(function(resolve, reject) {
      let cats = [];
      for (let i = 0; i <= 300000; i++) {
        cats.push({ id: "catId_" + i, name: "catName_" + i });
      }

      MongoClient.connect(connstr)
        .then(db => {
          const dbo = db.db(dbname);

          dbo.collection("categories").remove();
          // .then((err, doc) => {
          //   if (err) reject(err);

          //   resolve(doc);
          // });
        })
        .catch(err => {
          reject(err);
        });
      db.close();
    });
  },

  GetList: function(docs, filter, length, start = 0, draw = 1) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(connstr)
        .then(db => {
          const dbo = db.db(dbname);

          dbo
            .collection(docs)
            .find(filter)
            .skip(start)
            .limit(length)
            .toArray((err, items) => {
              if (err) reject(err);

              resolve(items);
            });

          // db.close();
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  SelectById: function(docs, filter) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(connstr)
        .then(db => {
          const dbo = db.db(dbname);

          dbo.collection(docs).findOne(filter, (err, items) => {
            if (err) reject(err);

            resolve(items);
          });

           db.close();
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
