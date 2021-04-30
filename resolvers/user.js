const { ApolloError, AuthenticatorError } = require("apollo-server-errors")
const bcrypt = require('bcrypt')
const { generateToken } = require('../utils')

module.exports = {
    Mutation: {
        async signUp(parent, { username, email, password }, { models }) {
            const userExists = await models.User.findOne({ where: { email } })

            if (userExists) {
                throw new ApolloError("Email already in use.")
            }

            const user = await models.User.create({ username, email, password})

            return { token: generateToken(user) }
        },

        async signIn(parent, { email, password }, { models }) {
            const user = await models.User.findOne({ where: { email } })

            if (!user) {
                throw new AuthenticatorError("Invalid email/password")
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                throw new AuthenticatorError("Invalid email/password")
            }

            return { token: generateToken(user) }
        }
    }
} 