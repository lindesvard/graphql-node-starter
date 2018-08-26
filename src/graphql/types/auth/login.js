import { compare } from 'common/auth/hash'
import { createToken, createRefreshToken } from 'common/auth/jwt'

export default async (_, { email, password }) => {
  if (!email || !password) throw new Error('email and password are required')

  const user = null

  if (!user || !compare(password, user.passwordHash, email)) {
    throw new Error('failed to login')
  }

  return {
    user,
    token: createToken(user),
    refreshToken: createRefreshToken(user),
  }
}
