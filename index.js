import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from './data.js'

const resolvers = {
  Query: {
    patents() {
      return db.patents;
    },
    patent(parent, args) {
      return db.patents.find((p) => p.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(parent, args) {
      return db.authors.find((a) => a.id === args.id);
    },
    citations() {
      return db.citations;
    },
    citation(parent, args) {
      return db.citations.find((c) => c.id === args.id);
    },
  },
  Patent: {
    citations(parent) {
      return db.citations.filter((c) => c.patentId === parent.id)
    }
  },
  Author: {
    references(parent) {
      return db.citations.filter((c) => c.authorId === parent.id)
    }
  },
  Citation: {
    patent(parent) {
      return db.patents.find((p) => p.id === parent.patentId);
    }
  },
  Mutation: {
    addPatent(_, args){
      let newPatent = {
        ...args.patent,
        id: Math.floor(Math.random()*10).toString()
      };
      db.patents.push(newPatent);
      return newPatent;
    },
    deletePatent(_, args) {
      return db.patents = db.patents.filter((p) => p.id !== args.id);
    },
    updatePatent(_, args){
      // console.log(args.edits)
      db.patent = db.patents.map((p)=>{
        if( p.id === args.id ){
          return {...p, ...args.edits}
        }
        return p;
      });
      // console.log(db.patent.find((p)=> p.id === args.id))
      return db.patent.find((p)=> p.id === args.id);
    }
  },
  
}
//server setup
const server = new ApolloServer({
  // schema/typeDefs - defintions of differnt types of data that we have on the graph and their relations
  typeDefs,
  //resolvers object
  resolvers

})

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});


console.log(`🚀  Server ready at: ${url}`);