var context = require('../context.js');
var secrets = require('../secrets.json');

var deleteRequestResolver = function (parent, args) { 
    var sql = `DELETE FROM ${secrets.table} WHERE id = ${parent.id};`;
    context.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
    });
    return 'Request Deleted'; 
};
module.exports = deleteRequestResolver;