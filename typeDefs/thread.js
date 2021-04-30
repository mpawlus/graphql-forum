const { gql } = require('apollo-server-express')

module.exports = gql `
    type Thread {
        id: ID!
        title: String!
        slug: String!
        content: String!
        creator: User!
        channel: Channel!
        status: ThreadStatus!
        isLocked: Boolean!
        lastRepliedAt: DateTime!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    enum ThreadStatus {
        UNSOLVED,
        SOLVED
    }
`