import { hashSync, compareSync } from 'bcrypt-nodejs'

export const hash = password => hashSync(password)
export const compare = (password, passwordHash) => {
  try {
    return compareSync(password, passwordHash)
  } catch (e) {
    return false
  }
}
