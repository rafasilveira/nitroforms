// External Dependencies
import mongodb, { Collection, Db, MongoClient } from 'mongodb'
import dotenv from 'dotenv'

// Global Variables
export const collections: { forms?: Collection } = {}

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

  const formsCollection: Collection = db.collection(
    process.env.FORMS_COLLECTION_NAME || 'forms'
  )

  collections.forms = formsCollection

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${formsCollection.collectionName}`
  )
}
