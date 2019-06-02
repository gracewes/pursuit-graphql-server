var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String, 
    liveness: String,
    readiness: String,
    getAllRequests: [Request]
  }
  type Mutation {
      createRequest(request: RequestInput!): String,
      deleteRequest(id: ID!): String,
      deleteAllRequests: String
  }
  type Request {
    name: String!, 
    email: String!,
    request: String!,
    date: String,
    id: ID
  }
  input RequestInput {
      name: String!, 
      email: String!,
      request: String!
  }
`);

module.exports = schema;