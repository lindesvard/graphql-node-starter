import fs from 'fs'
import { join } from 'path'
import { map, merge } from 'lodash'

const TYPES_FOLDER = './types'

const requireFile = file => require([TYPES_FOLDER, file].join('/'))

const getTypes = () =>
  fs.readdirSync(join(__dirname, TYPES_FOLDER)).map(requireFile)

export default (RootQuery, rootResolvers) => {
  const types = getTypes()

  return {
    typeDefs: [RootQuery, ...map(types, 'typeDef')],
    resolvers: merge(rootResolvers, ...map(types, 'resolvers')),
  }
}
