// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = "mongodb://admin:c3%3E2bghXFx%24ZSLW%25Jm@44.209.219.172:27017/";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
