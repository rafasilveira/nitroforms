import { graphqlHTTP } from 'express-graphql'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from '../resolvers/hello.resolver'

const graphqlMiddleware = graphqlHTTP(async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
    authChecker: () => true, // safest auth ever, lol
  })

  return { schema: schema, graphiql: true }
})

export default graphqlMiddleware
