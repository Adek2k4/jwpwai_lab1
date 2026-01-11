import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'foodies';

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable');
}

let cachedClient = null;
let cachedDb = null;

export async function getDb() {
  if (cachedDb && cachedClient) return cachedDb;

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;
  return db;
}

export async function getMealsCollection() {
  const db = await getDb();
  return db.collection('meals');
}
