import dotenv from 'dotenv'
import app from './config/express'

dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
