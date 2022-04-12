import dotenv from 'dotenv'
import configExpress from './config/express'

dotenv.config()

const app = configExpress()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${port}`)
})
