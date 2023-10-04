export const typeDefs = `#graphql
  type Patent {
    id: ID!,
    title: String!,
    authors: [String!]!,
    citations: [Citation!]
  }
  type Citation { 
    id: ID!,
    impact: Int!,
    patent: Patent!,
    author: Author!,
    use: String
  }
  type Author { 
    id: ID!,
    name: String!,
    institute: String,
    certified: Boolean!,
    references: [Citation!],
    patents: [Patent!]
  }
  type Query { 
    patents: [Patent]
    patent(id: ID!): Patent

    authors: [Author]
    author(id: ID!): Author

    citations: [Citation]
    citation(id: ID!): Citation

  }
  type Mutation { 
    addPatent(patent: PatentDetails!): Patent
    deletePatent(id: ID!): [Patent!]
    updatePatent(id: ID!, edits: EditDetails): Patent
  }
  input PatentDetails {
    title: String!,
    authors: [String!]!,
  }
  input EditDetails {
    title: String,
    authors: [String!],
  }
`


//BAISC SCALER TYPES IN GRAPGHQL
// int , float, string, boolean, ID