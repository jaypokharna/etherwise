import clientPromise from "@/lib/mongo";

// pages/api/data.js
clientPromise

export default async function handler(req, res) {
  try {
    console.log("Request received")
    const client = await clientPromise;
    const db = client.db("etherwise");
    const collection = db.collection("comments");

    const data = await collection.find({}).toArray();
      console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
