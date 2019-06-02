var context = require('../context.js');
var secrets = require('../secrets.json');

var deleteAllRequestsResolver = function (parent, args) { 
    var sql = `DELETE FROM ${secrets.table}`;
    context.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Records Deleted");
    });
    return 'Request Deleted'; 
};
module.exports = deleteAllRequestsResolver;