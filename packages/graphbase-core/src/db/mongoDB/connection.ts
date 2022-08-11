import { MongoClient, Db } from 'mongodb';

type mongoConnectionType =
    | {
          db: Db;
          conn: MongoClient;
      }
    | undefined;

const client = new MongoClient(process.env.DATABASE_URL || 'mongodb://localhost:27017');

let mongoConnection: mongoConnectionType = undefined;

export const mc = async () => {
    if (mongoConnection) return mongoConnection;
    if (!process.env.DATABASE_URL) {
        throw new Error('Please provide database url in your environment settings');
    }
    const conn = await client.connect();
    const db = client.db();
    mongoConnection = { conn, db };
    return mongoConnection;
};
