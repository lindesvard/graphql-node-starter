import { createToken, createRefreshToken } from 'common/auth/jwt'

export default async (_, { email, password }) => {
  if (!email || !password)
    throw new Error('email, password, nick and code are required')

  const user = null

  return {
    user,
    token: createToken(user),
    refreshToken: createRefreshToken(user),
  }
}
