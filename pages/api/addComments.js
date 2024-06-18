// pages/api/addComment.js
import clientPromise from "@/lib/mongo";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { blogName } = req.query;
  
      if (!blogName) {
        return res.status(400).json({ error: 'Blog name is required' });
      }
  
      try {
        const client = await clientPromise;
        const db = client.db("etherwise-marketing");
        const collection = db.collection(blogName);
  
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