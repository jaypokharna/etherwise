// pages/api/addComment.js
import clientPromise from "@/lib/mongo";

export default async function handler(req, res) {
    if (req.method === 'POST') {
  
      try {
        const client = await clientPromise;
        const db = client.db("etherwise");
        const collection = db.collection('Clients');
  
        const newComment = {
          ...req.body,
          date: new Date().toISOString()
        };

       
        const result = await collection.insertOne(newComment);
  
        res.status(200).json({ message: 'Comment added successfully', result });
      } catch (error) {
        console.error("Error in addComment API:", error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }