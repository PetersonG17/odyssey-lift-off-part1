const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "HTTP Status code of the mutation"
    code: Int!
    " Indicates if the mutation was successful"
    success: Boolean!
    "Human readable message for the operation"
    message: String!
    "Track that was mutated"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The complete description of the Track"
    description: String
    "The number of times the track has been viewed"
    numberOfViews: Int
    "The modules for the track"
    modules: [Module!]!
  }

  "A single unit of teaching. Multiple modules compose a track"
  type Module {
    id: ID!
    "The modules title"
    title: String
    "The length of the module in mins"
    length: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
