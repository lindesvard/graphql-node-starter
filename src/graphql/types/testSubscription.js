import pubsub from 'common/pubsub'

export const typeDef = `
  extend type Subscription {
    testCreated: Test
  }

  type Test {
    text: String
  }
`

export const resolvers = {
  Subscription: {
    testCreated: {
      subscribe: () => pubsub.asyncIterator('testCreated'),
    },
  },
}

setInterval(() => {
  pubsub.publish('testCreated', {
    testCreated: {
      text: `This test was created ${new Date().toISOString()}`,
    },
  })
}, 5000)
