const express = require("express");
const { ApolloServer } = require("apollo-server-express");

require("./models/db");
const Issue = require("./models/issues");

let greetMessage = "Hello i am GraphQL";

const tempIssues = [
  {
    Id: 1,
    Owner: "Person-A",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 4,
    Due: "2023-01-30",
    Title: "This is the info for task A",
  },
  {
    Id: 2,
    Owner: "Person-B",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 8,
    Due: "2023-02-15",
    Title: "This is the info for task B",
  },
];

const typeDefs = `
    type Issue{
        Id: Int,
        Owner: String,
        Status: String,
        Created: String,
        Effort: Int,
        Due: String,
        Title: String
    }
    type Query {
        greet: String!,
        issueList: [Issue!]        
    }
    type Mutation {
        setGreetMessage(message: String!): String        
    }
`;

const resolvers = {
  Query: {
    greet: () => greetMessage,
    issueList,
  },
  Mutation: {
    setGreetMessage,
  },
};
async function issueList() {
  return await Issue.find();
}
function setGreetMessage(_, { message }) {
  return (greetMessage = message);
}
// function issueList() {
//   return tempIssues;
// }

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.static("public"));

server.start().then(function () {
  server.applyMiddleware({ app, path: "/graphql", cors: true });
});

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen("4000", () => {
  console.log("Webserver is running..............");
});
