export const typeDef = `
  extend type Mutation {
    login(email: String!, password: String!): Auth
    register(email: String!, password: String!): Auth
    authToken(refreshToken: String!): Auth
  }

  type Auth {
    user: User
    token: String
    refreshToken: String
  }
`

export const resolvers = {
  Mutation: {
    login: require('./login').default,
    register: require('./register').default,
    authToken: require('./authToken').default,
  },
}
