import db from 'models'
import config, { get } from 'config'
import { paginate } from 'common/models'
import getUserFromRequest from 'common/auth/getUserFromRequest'
import { ApolloServer } from 'apollo-server-express'
export { default as createSchema } from './schema'

const engine = get('apolloEngine.apiKey') ? config.apolloEngine : null

export default ({ schema }) =>
  new ApolloServer({
    schema,
    engine,
    introspection: true,
    context: async ({ req, connection }) => {
      return {
        db,
        paginate: paginate(),
        user: await getUserFromRequest(req, connection),
      }
    },
  })
