import config from 'config'
import { EXPIRED_TOKEN } from 'constants'
import { pick } from 'lodash'
import jwt from 'jsonwebtoken'

export const FIELDS_FOR_PAYLOAD = ['id']

export const getPayloadFromToken = (token, secret) => {
  const decoded = jwt.verify(token, secret)

  if (!decoded) {
    return false
  }

  return decoded
}

export const isRefreshTokenExpired = (token, secret) => {
  jwt.verify(token, secret, err => {
    if (err) {
      return err.name == EXPIRED_TOKEN ? true : false
    }
  })
}

export const createToken = payload =>
  jwt.sign(pick(payload, FIELDS_FOR_PAYLOAD), config.jwt.secret, {
    expiresIn: config.jwt.expire,
  })

export const createRefreshToken = payload => {
  // TODO: create a new table and save the refreshToken there
  const token = jwt.sign(
    pick(payload, FIELDS_FOR_PAYLOAD),
    config.jwt.refresh.secret,
    {
      expiresIn: config.jwt.refresh.expire,
    }
  )

  // RefreshToken.create({ token, UserId: user.id })

  return token
}
