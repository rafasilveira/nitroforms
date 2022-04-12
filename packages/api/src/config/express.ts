import express from 'express'
import graphqlMiddleware from '../middleware/graphql.middleware'
import { loggerMiddleware } from '../middleware/logger.middleware'
import { connectToDatabase } from '../service/database.service'

export default () => {
  const app = express()

  // db connection
  connectToDatabase()
    .then(() => {
      // applying middleweares
      app.use(express.json())
      app.use(loggerMiddleware)
      app.use('/graphql', graphqlMiddleware)
    })
    .catch((error: Error) => {
      console.error('Unable to start application!')
      console.error('Database connection failed', error)
      process.exit()
    })

  return app
}
