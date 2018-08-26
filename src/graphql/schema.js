import generateSchema from './generateSchema'
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools'
import GraphQLJSON from 'graphql-type-json'
import { gql } from 'apollo-server-express'

const Query = gql`
  scalar Json

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`

const resolvers = {
  Json: GraphQLJSON,
}

export default async () => {
  const schema = makeExecutableSchema(generateSchema(Query, resolvers))

  return mergeSchemas({
    schemas: [schema],
  })
}
