var helloResolver = require('./hello.resolver');
var livenessResolver = require('./liveness.resolver');
var readinessResolver = require('./readiness.resolver');
var createRequestResolver = require('./createRequest.resolver');
var getAllRequestsResolver = require('./getAllRequests.resolver');
var deleteRequestResolver = require('./deleteRequest.resolver');
var deleteAllRequestsResolver = require('./deleteAllRequests.resolver');

var resolver = {
    hello: helloResolver,
    liveness: livenessResolver,
    readiness: readinessResolver,
    getAllRequests: getAllRequestsResolver,
    createRequest: createRequestResolver,
    deleteRequest: deleteRequestResolver,
    deleteAllRequests: deleteAllRequestsResolver
};


module.exports = resolver;