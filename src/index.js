import cors from 'cors'
import config from 'config'
import morgan from 'morgan'
import routes from 'routes'
import express from 'express'
import createApolloServer, { createSchema } from 'graphql'
import { createServer as createHttpServer } from 'http'
import bodyParser from 'body-parser'
import { log } from 'common/logger'

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))

createSchema().then(schema => {
  const server = createHttpServer(app)
  const apollo = createApolloServer({ schema })

  apollo.applyMiddleware({ app })
  apollo.installSubscriptionHandlers(server)

  app.use(routes())

  server.listen(config.port, () => {
    log(`Running on > http://localhost:${config.port}`)
    log(`Current config > ${JSON.stringify(config, null, 2)}`)
    log(`Graphql path > ${apollo.graphqlPath}`)
    log(`Graphql subscription > ${apollo.subscriptionsPath}`)
  })
})
