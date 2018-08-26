import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

// // Example how to publish something
// export const POST_CREATED = 'postCreated'

// export const publishPost = post =>
//   pubsub.publish(POST_CREATED, {
//     [POST_CREATED]: post,
//   })

export default pubsub
