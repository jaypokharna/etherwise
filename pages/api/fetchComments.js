import clientPromise from "@/lib/mongo";

// pages/api/data.js
clientPromise

export default async function handler(req, res) {
  try {

    const { blogName } = req.query;
    const client = await clientPromise;
    const db = client.db("etherwise-marketing");
    const collection = db.collection(blogName);
    // const collection = db.collection('comments');

    const data = await collection.find({}).toArray();
    res.status(200).json(data.reverse());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
