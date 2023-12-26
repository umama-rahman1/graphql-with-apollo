export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
    }
    type Author {
        id: ID!
        name: String!
        verfiied: Boolean!
    }
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }
`
