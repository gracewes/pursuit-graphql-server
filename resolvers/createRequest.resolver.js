var context = require('../context.js');
var secrets = require('../secrets.json')

var createRequestResolver = function (parent, args) { 
    var sql = `INSERT INTO ${secrets.table} (Name, Email, Request) VALUES ("${parent.request.name}", "${parent.request.email}", "${parent.request.request}");`;
    context.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    return 'Request Created'; 
};
module.exports = createRequestResolver;