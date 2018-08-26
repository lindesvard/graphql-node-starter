import config from 'config'
import { get } from 'lodash'
import {
  createToken,
  createRefreshToken,
  getPayloadFromToken,
} from 'common/auth/jwt'

export default async (_, { refreshToken }) => {
  const decoded = getPayloadFromToken(refreshToken, config.jwt.refresh.secret)

  if (!get(decoded, 'id')) {
    throw new Error('invalid refresh token')
  }

  // TODO: Should check if this refresh token exists in our database!
  // const exists = refreshTokens.includes(token)

  // if (!exists) {
  //   throw new Error('could not find the refresh token')
  // }

  const user = null

  if (!user) {
    throw new Error('could not find the user')
  }

  return {
    user,
    token: createToken(user),
    refreshToken: createRefreshToken(user),
  }
}
