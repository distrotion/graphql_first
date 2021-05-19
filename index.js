var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
 
var schema = buildSchema(`
  scalar JSON
  type Query {
    hello: String,
    test: Int,
    endpoint01: JSON,
    endpoint02: JSON,
    endpoint03: JSON,
    endpoint04: JSON,
  }
`);
 
var root = { 
    hello: () => {
    var x = 'Hello PARIN'
    return x ;
  } ,
    test: () => {
    var x = 2+1
    return x ;
  } ,
  endpoint01: () => {
    return {
      name: "SITTICHOK",
      age: "31",
      gender: "Male"
  } 
  },
  endpoint02: () => {
    return {
      name: "PARIN",
      age: "30",
      place: "INDIA",
      gender: "Male"
  }  
  },
  endpoint03: () => {
    return {
      name: "CHAIWAT",
      age: "29",
      LANGUAGE: "Thai",
  }  
  },
  endpoint04: () => {
    return {
      name: "Tony",
      age: "65",
      place: "Dubai"
  }  
  }    
};  

 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));