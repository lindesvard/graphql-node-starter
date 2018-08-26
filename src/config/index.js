import { merge, get as _get } from 'lodash'
import defaultConfig from './default'

const getEnvironment = () => {
  let environment = 'development'

  switch (process.env.NODE_ENV) {
    case 'development':
      environment = 'development'
      break
    case 'production':
      environment = 'production'
      break
  }

  return `./${environment}`
}

const environmentConfig = require(getEnvironment())
const config = merge(defaultConfig, environmentConfig)

export default config
export const get = key => _get(config, key, null)
