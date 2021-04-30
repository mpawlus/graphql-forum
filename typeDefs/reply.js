const { gql } = require('apollo-server-express')

module.exports = gql `
    type Reply {
        id: ID!
        content: String!
        user: User!
        isBestAnswer: Boolean!
        createdAt: String!
        updatedAt: String!
    }
`