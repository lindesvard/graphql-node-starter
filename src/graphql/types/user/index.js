export const typeDef = `
  extend type Query {
    currentUser: User
  }

  type User {
    id: ID
    email: String
  }
`

export const resolvers = {
  Query: {
    currentUser: require('./currentUser').default,
  },
}
