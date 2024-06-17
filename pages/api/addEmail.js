// pages/api/addComment.js
import clientPromise from "@/lib/mongo";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        
      try {
        const client = await clientPromise;
        const db = client.db("etherwise");
        const emailCollection = db.collection('EmailList')
  
        const {email} = req.body;
        const result = await emailCollection.insertOne({email:email});
  
        res.status(200).json({ message: 'Email added successfully',result  });
      } catch (error) {
        console.error("Error in addComment API:", error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }