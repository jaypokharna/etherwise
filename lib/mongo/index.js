// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://jayp:2012@cluster0.ozimw5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
