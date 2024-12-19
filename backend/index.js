const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://muhtasinjawad1:505QzlgszneoHfPl@cluster0.iknez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const meetingCollection = client.db("meetingDB").collection("meeting");
    const casesCollection = client.db("meetingDB").collection("case");
    const blogsCollection = client.db("meetingDB").collection("blog");

    
    app.get('/meetings', async (req, res) => {
        const { limit } = req.query; // Get the limit from the query params
        const cursor = meetingCollection
            .find({})
            .sort({ date: -1 }); // Sort by date in descending order (newest first)
    
        if (limit) {
            cursor.limit(parseInt(limit, 10)); // Apply limit if provided
        }
    
        const results = await cursor.toArray();
        res.status(200).json(results);
    });

    app.get('/cases', async (req, res) => {
      const { limit } = req.query; // Get the limit from the query params
      const cursor = casesCollection
          .find({})
          .sort({ date: -1 }); // Sort by date in descending order (newest first)
  
      if (limit) {
          cursor.limit(parseInt(limit, 10)); // Apply limit if provided
      }
  
      const results = await cursor.toArray();
      res.status(200).json(results);
    });

    app.get('/blogs', async (req, res) => {
      const { limit } = req.query; // Get the limit from the query params
      const cursor = blogsCollection
          .find({})
          .sort({ date: -1 }); // Sort by date in descending order (newest first)
  
      if (limit) {
          cursor.limit(parseInt(limit, 10)); // Apply limit if provided
      }
  
      const results = await cursor.toArray();
      res.status(200).json(results);
    });
    
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello from backend2');
});


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});