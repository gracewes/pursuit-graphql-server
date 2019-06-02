var context = require('../context.js');
var secrets = require('../secrets.json');

calldb = function () {
    return new Promise(function(resolve, reject){
        var sql = `SELECT * FROM ${secrets.table}`;
        context.connection.query(sql, function (err, result) {
          if (err) reject(err);
          else{
            console.log('Records Retrieved');
            resolve(result);
          }
        });
    })
}

var getAllRequestsResolver = function () { 
  return calldb().then((result) => {
    var returnArray = [];
    result.forEach(element => {
        var requestObj = 
        {
          "id": element.id,
          "name": element.Name,
          "email": element.Email,
          "request": element.Request,
          "date": element.Date
        };
      returnArray.push(requestObj);
    });
  return returnArray;
  });
};

module.exports = getAllRequestsResolver;