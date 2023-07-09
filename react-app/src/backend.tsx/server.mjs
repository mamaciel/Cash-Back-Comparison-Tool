import express from "express";
import MongoClient from "mongodb";

const mongoURL =
  "mongodb+srv://mamaciel:rPYcph5DDChUCyTK@cashback.xkd1sqn.mongodb.net/?retryWrites=true&w=majority";
const port = 5174;

const app = express();

app.get("/api/data", async (req, res) => {
  const client = new MongoClient(mongoURL);

  try {
    await client.connect();
    const collection = client.db().collection("CreditCards");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get();
