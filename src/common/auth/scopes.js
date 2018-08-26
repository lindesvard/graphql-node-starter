import { get } from 'lodash'
import { JWT_EXPIRED, UNAUTHENTICATED } from 'constants'

export const withAuth = callback => (root, params = {}, context = {}) => {
  if (context.user === JWT_EXPIRED) {
    throw new Error(JWT_EXPIRED)
  }

  if (!get(context, 'user.id')) {
    throw new Error(UNAUTHENTICATED)
  }

  // all good go back to our resolver now
  return callback(params, context)
}
