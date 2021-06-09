import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { schemas } from '@modules/products/graphql/schemas'
import { resolvers } from '@modules/products/graphql/resolvers'

const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers
})

const app = express()

app.use(cors())
app.use(express.json())

app.use('/graphql', graphqlHTTP({
  schema,
}))

export { app }
