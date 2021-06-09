import { join } from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const schemasArray = loadFilesSync(join(__dirname, './', '*.gql'))

export const schemas = mergeTypeDefs(schemasArray)
