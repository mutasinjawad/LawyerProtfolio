const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

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

// Function to get the next sequence for a collection
const getNextSequence = async (db, sequenceName) => {
  const counter = await db.collection("counters").findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { seq: 1 } },
    { returnDocument: "after", upsert: true }
  );
  return counter.value.seq;
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const meetingCollection = client.db("meetingDB").collection("meeting");
    const casesCollection = client.db("meetingDB").collection("case");
    const blogsCollection = client.db("meetingDB").collection("blog");
    const contactCollection = client.db("meetingDB").collection("message"); // New collection for storing contact messages

    // ============== API Routes ==============

    // Fetch all meetings or set a limit to the number of meetings returned
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

    // Fetch a specific meeting by ID
    app.get('/meetings/:id', async (req, res) => {
      const { id } = req.params; // Get the ID from the URL params
    
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

    // Route to add a new meeting
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
        res.status(201).json({ message: "Meeting added successfully.", newMeeting });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add meeting." });
      }
    });

    // Route to update a meeting
    app.put('/meetings/:id', async (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ message: "Both title and description are required." });
      }

      try {
        const result = await meetingCollection.updateOne(
          { id: parseInt(id, 10) },
          { $set: { title, description } }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Meeting not found." });
        }

        res.status(200).json({ message: "Meeting updated successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update meeting." });
      }
    });

    // Route to delete a meeting
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

    // POST method to handle contact form submission
    app.post('/contact', async (req, res) => {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required." });
      }

      const contactMessage = {
        name: name,
        email: email,
        message: message,
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