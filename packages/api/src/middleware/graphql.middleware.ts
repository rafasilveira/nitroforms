import { graphqlHTTP } from 'express-graphql'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { FormsResolver } from '../resolver/forms.resolver'

const graphqlMiddleware = graphqlHTTP(async () => {
  const schema = await buildSchema({
    resolvers: [FormsResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
    authChecker: () => true, // safest auth ever, lol
  })

  return {
    schema: schema,
    graphiql: true,
    customFormatErrorFn: (error) => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path,
    }),
  }
})

export default graphqlMiddleware
