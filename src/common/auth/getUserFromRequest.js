import { getPayloadFromToken } from 'common/auth/jwt'
import config from 'config'
import { JWT_EXPIRED } from 'constants'
import { error } from 'common/logger'

const getAuthorization = (req, connection) => {
  if (req) {
    return req.headers.authorization
  }

  return connection.context.authorization
}

export default async (req, connection) => {
  const authorization = getAuthorization(req, connection)

  if (!authorization) return null

  const token = authorization.replace('Bearer', '').trim()

  try {
    const decoded = getPayloadFromToken(token, config.jwt.secret)
    if (!decoded || !decoded.id) {
      error('getUserFromRequest: Could not parse Jwt token')
    }

    return decoded
  } catch (e) {
    error(`getUserFromRequest: ${e.message}`)

    if (e.message === 'jwt expired') {
      return JWT_EXPIRED
    }

    return e
  }
}
