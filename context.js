var connection = require('./connect.js');
var schema = require('./schema.js');
var resolver = require('./resolvers/resolver.js');

var context = {
    connection: connection,
    resolver: resolver,
    schema: schema
};

module.exports = context;