const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dev:hCoYCjUTGFKEC2IK@boreal.vaa1q.mongodb.net/boreal_db?retryWrites=true&w=majority";

const express = require("express");
const app = express();

app.use(express.json());

process.on("uncaughtException", function (err) {
  console.log(err);
});

// Functions to access database
async function getProductsFromDatabase() {
  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  const db = client.db("boreal_db");
  var products_tb = db.collection("products");
  let allproducts = await products_tb.find().toArray();

  client.close();
  return allproducts;
}

async function writeOrderInDB(order) {
  if (order === undefined) return "Error. Order is not defined.";

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  const db = client.db("boreal_db");
  var ordersCollection = db.collection("orders");
  let requestStatus = 10;
  try {
    requestStatus = await ordersCollection.insertOne(order);
  } catch (e) {
    client.close();
    return "Error in request to database. Make sure you sent a unique ID.";
  }
  client.close();
  return requestStatus;
}

// API endpoints as functions
app.get("/getAllProducts", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });

  getProductsFromDatabase().then((response) => {
    res.send(response);
  });
});

app.post("/sendOrder", (req, res) => {
  console.log("\n[API endpoint - send Order]\n\nOrder to add: ");
  console.log(req.body);

  res.set({ "Access-Control-Allow-Origin": "*" });

  writeOrderInDB(req.body).then((response) => {
    console.log("\nResponse is:");
    console.log(response);
    console.log();
    res.send(response);
  });
});

app.listen(3001, () => console.log("Listening on port 3001..."));
