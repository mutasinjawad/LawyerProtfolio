const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For token generation
const token = process.env.JWT_SECRET; // Secret key for token generation
const adminRoutes = require('./routes/admin');
const admin = require("firebase-admin");

// Middleware
app.use(cors());
app.use(express.json());

require('dotenv').config();

const uri = process.env.MONGODB_URI;

admin.initializeApp({
  credential: admin.credential.cert(require("./service-account-key.json")),
});

const allowedEmail = process.env.ALLOWED_EMAIL ? process.env.ALLOWED_EMAIL.split(",") : [];

// Routes
app.use('/api/admin', adminRoutes);

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
    const liveCollection = client.db("meetingDB").collection("live");
    const contactCollection = client.db("meetingDB").collection("message"); // New collection for storing contact messages
    const adminCollection = client.db("meetingDB").collection("admin"); // Collection for storing admin credentials

    // Drop the existing TTL index if it exists
    const indexes = await liveCollection.indexes();
    const existingIndex = indexes.find(index => index.name === 'time_1');

    if (existingIndex) {
      console.log("Dropping existing index...");
      await liveCollection.dropIndex('time_1');
    }

    // Ensure the TTL index is created for automatic deletion after 5 hours
    await liveCollection.createIndex(
      { time: 1 }, // Index on the `time` field
      { expireAfterSeconds: 18000 } // 5 hours = 18000 seconds
    );

    // ============== MEETINGS ==============

    // Get all or limited
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

    // Get by ID
    app.get('/meetings/:id', async (req, res) => {
      const { id } = req.params;
    
      try {
        // Convert the string ID to a MongoDB ObjectId
        const objectId = new ObjectId(id);
    
        const meeting = await meetingCollection.findOne({ _id: objectId });
    
        if (!meeting) {
          return res.status(404).json({ message: "Meeting not found" });
        }
    
        res.status(200).json(meeting);
      } catch (error) {
        console.error("Error fetching meeting by ID:", error);
    
        // Handle invalid ObjectId format
        if (error instanceof TypeError) {
          return res.status(400).json({ message: "Invalid meeting ID format" });
        }
    
        res.status(500).json({ message: "Failed to fetch meeting" });
      }
    });

    // Add
    app.post('/meetings', async (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ message: "Both title and description are required." });
      }

      const newMeeting = {
        title,
        description,
        date: new Date() // Capture the current time
      };

      try {
        await meetingCollection.insertOne(newMeeting);
        res.status(201).json(newMeeting);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add meeting." });
      }
    });

    // Update
    app.put('/meetings/:id', async (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ message: "Both title and description are required." });
      }

      try {
        const result = await meetingCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { title, description } }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Meeting not found." });
        }

        const updatedMeeting = await meetingCollection.findOne({ _id: new ObjectId(id) });

        res.status(200).json(updatedMeeting);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update meeting." });
      }
    });

    // Delete
    app.delete('/meetings/:id', async (req, res) => {
      const { id } = req.params;

      try {
        const result = await meetingCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Meeting not found." });
        }

        res.status(200).json({ message: "Meeting deleted successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete meeting." });
      }
    });

    // ============== CASES ==============

    // Cases API routes
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

    // Get by ID
    app.get('/cases/:id', async (req, res) => {
      const { id } = req.params;
    
      try {
        // Convert the string ID to a MongoDB ObjectId
        const objectId = new ObjectId(id);
    
        const cases = await casesCollection.findOne({ _id: objectId });
    
        if (!cases) {
          return res.status(404).json({ message: "Case not found" });
        }
    
        res.status(200).json(cases);
      } catch (error) {
        console.error("Error fetching case by ID:", error);
    
        // Handle invalid ObjectId format
        if (error instanceof TypeError) {
          return res.status(400).json({ message: "Invalid case ID format" });
        }
    
        res.status(500).json({ message: "Failed to fetch case" });
      }
    });

    // Add
    app.post('/cases', async (req, res) => {
      const {title, summary, outcome} = req.body;

      if (!title || !summary || !outcome){
        return res.status(400).json({ message: "All the fields are required." });
      }

      const newCase = {
        title,
        summary,
        outcome,
        date: new Date()
      };

      try{
        await casesCollection.insertOne(newCase);
        res.status(201).json(newCase);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Faile to add case." })
      }
    })

    // Update
    app.put('/cases/:id', async (req, res) => {
      const { id } = req.params;
      const { title, summary, outcome } = req.body;

      if (!title || !summary || !outcome) {
        return res.status(400).json({ message: "All the fields are required." });
      }

      try {
        const result = await casesCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { title, summary, outcome } }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Case not found." });
        }

        const updatedCase = await casesCollection.findOne({ _id: new ObjectId(id) });

        res.status(200).json(updatedCase);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update case." });
      }
    });

    // Delete
    app.delete('/cases/:id', async (req, res) => {
      const { id } = req.params;

      try {
        const result = await casesCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Case not found." });
        }

        res.status(200).json({ message: "Case deleted successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete case." });
      }
    });

    // ============== BLOGS ==============

    // Blogs API routes
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

    // Get by ID
    app.get('/blogs/:id', async (req, res) => {
      const { id } = req.params;
    
      try {
        // Convert the string ID to a MongoDB ObjectId
        const objectId = new ObjectId(id);
    
        const blogs = await blogsCollection.findOne({ _id: objectId });
    
        if (!blogs) {
          return res.status(404).json({ message: "Blog not found" });
        }
    
        res.status(200).json(blogs);
      } catch (error) {
        console.error("Error fetching blog by ID:", error);
    
        // Handle invalid ObjectId format
        if (error instanceof TypeError) {
          return res.status(400).json({ message: "Invalid blog ID format" });
        }
    
        res.status(500).json({ message: "Failed to fetch blog" });
      }
    });

    // Add
    app.post('/blogs', async (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ message: "Both title and description are required." });
      }

      const newBlog = {
        title,
        description,
        date: new Date() // Capture the current time
      };

      try {
        await blogsCollection.insertOne(newBlog);
        res.status(201).json(newBlog);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add blog." });
      }
    });

    // Update
    app.put('/blogs/:id', async (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ message: "Both title and description are required." });
      }

      try {
        const result = await blogsCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { title, description } }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Blog not found." });
        }

        const updatedBlog = await blogsCollection.findOne({ _id: new ObjectId(id) });

        res.status(200).json(updatedBlog);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update blog." });
      }
    });

    // Delete
    app.delete('/blogs/:id', async (req, res) => {
      const { id } = req.params;

      try {
        const result = await blogsCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Blog not found." });
        }

        res.status(200).json({ message: "Blog deleted successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete blog." });
      }
    });

    // ============== LIVE ==============

    // Get live link
    app.get('/live', async (req, res) => {
      const { limit } = req.query; // Get the limit from the query params
      const cursor = liveCollection.find({}).sort({ time: -1 }); // Sort by time in descending order (newest first)

      if (limit) {
        cursor.limit(parseInt(limit, 10)); // Apply limit if provided
      }
      
      const results = await cursor.toArray();
      res.status(200).json(results);
    });

    // Add
    app.post('/live', async (req, res) => {
      const { link } = req.body;

      if (!link) {
        return res.status(400).json({ message: "Link is required." });
      }

      const newLive = {
        link,
        time: new Date() // Capture the current time
      };

      try {
        await liveCollection.insertOne(newLive);
        res.status(201).json(newLive);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add live link." });
      }
    });

    // Delete
    app.delete('/live/:id', async (req, res) => {
      const { id } = req.params;

      try {
        const result = await liveCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Live link not found." });
        }

        res.status(200).json({ message: "Live link deleted successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete live link." });
      }
    });

    // ============== CONTACT FORM ==============

    // Get all contact messages
    app.get('/messages', async (req, res) => {
      const cursor = contactCollection.find({}).sort({ time: -1 }); // Sort by time in descending order (newest first)
      const results = await cursor.toArray();
      res.status(200).json(results);
    });

    // Add
    app.post('/contact', async (req, res) => {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required." });
      }

      const contactMessage = {
        name,
        email,
        message,
        time: new Date() // Capture the current time
      };
      
      
      try {
        // Insert the contact form message into the database
        const result = await contactCollection.insertOne(contactMessage);
        res.status(201).json({ message: "Contact message stored successfully.", result });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to store contact message." });
      }
    });

    // Delete
    app.delete('/messages/:id', async (req, res) => {
      const { id } = req.params;

      try {
        const result = await contactCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Contact message not found." });
        }

        res.status(200).json({ message: "Contact message deleted successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete contact message." });
      }
    });
    
    // ================== ADMIN ==================

    // Admin login
    app.post("/verify-email", async (req, res) => {
      const { token } = req.body;
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const userEmail = decodedToken.email;
    
        if (allowedEmail.includes(userEmail)) {
          res.json({ authorized: true });
        } else {
          res.json({ authorized: false });
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ authorized: false });
      }
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
    res.send('Hello from backend');
});


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});