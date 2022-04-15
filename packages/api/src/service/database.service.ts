// External Dependencies
import mongodb, { Collection, Db, MongoClient } from 'mongodb'
import dotenv from 'dotenv'

// Global Variables
export const collections: { forms?: Collection; projects?: Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI
  const dbName = process.env.MONGODB_DB

  if (!uri || !dbName) {
    throw new Error(
      'Please define the MONGODB_URI and MONGODB_DB variables inside .env!!'
    )
  }

  const client: MongoClient = new MongoClient(uri!)
  await client.connect()

  const db: Db = client.db(process.env.DB_NAME)

  collections.forms = db.collection('forms')
  collections.projects = db.collection('projects')

  console.log(`Successfully connected to database: ${db.databaseName}`)
}
