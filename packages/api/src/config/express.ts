import express from 'express'
import graphqlMiddleware from '../middleware/graphql.middleware'
import { loggerMiddleware } from '../middleware/logger.middleware'

const app = express()

// applying middleweares
app.use(express.json())
app.use(loggerMiddleware)
app.use('/graphql', graphqlMiddleware)

export default app
