const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dev:hCoYCjUTGFKEC2IK@boreal.vaa1q.mongodb.net/boreal_db?retryWrites=true&w=majority";

const express = require('express');
const cors = require('cors')
const app = express();

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(cors());

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
async function retrieveOrderInDb(uri_, user_info) {
  try {
  const client = await  MongoClient.connect(uri_, {
    useUnifiedTopology: true, serverApi: ServerApiVersion.v1
  });
  const db = client.db("boreal_db");
  var orders_tb = db.collection("orders");
  const response = await orders_tb.find({"customer_id": user_info.customer_id},{
  }).toArray();
  client.close();
  return response;
} catch(error) {
  client.close();
  console.log(error);
}
}
async function writeNewUserProfileToDb(uri_, user_info) {
  try {
    const client = await  MongoClient.connect(uri_, {
      useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    });
    const db = client.db("boreal_db");
    var users_tb = db.collection("user_accounts_info");
    const response = await users_tb.insertOne(user_info);
    client.close();
    return response;

  } catch (error) {
    console.log(error);
    client.close();
  }
  
}

async function updateUserProfileToDb(uri_, user_info) {
  try {
    const client = await  MongoClient.connect(uri_, {
      useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    });
    const db = client.db("boreal_db");
    var users_tb = db.collection("user_accounts_info");
    const response = await users_tb.updateOne({"_id": user_info._id},{
      $set: {
        "full_name": user_info.full_name,
        "email": user_info.email,
        "password": user_info.password,
        "home_address": user_info.home_address,
        "phone_number": user_info.phone_number,
        "gender": user_info.gender,
        "account_type": user_info.account_type
      }
    })
    client.close();
    return response;
  } catch(error) {
    client.close();
    console.log(error);
  }
}

async function validateUserProfileToDb(uri_, user_info) {
  try {
  const client = await  MongoClient.connect(uri_, {
    useUnifiedTopology: true, serverApi: ServerApiVersion.v1
  });
  const db = client.db("boreal_db");
  var users_tb = db.collection("user_accounts_info");
  const response = await users_tb.findOne({"email": user_info.email, "password": user_info.password},{
  })
  client.close();
  return response;
} catch(error) {
  client.close();
  console.log(error);
}
}

//Create an API endpoint to add a product to the database (_id can be viewed as SKU; unique)
async function writeNewSellerProductToDb(uri_, seller_info) {
  try {
    const client = await  MongoClient.connect(uri_, {
      useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    });
    const db = client.db("boreal_db");
    var products_tb = db.collection("products");
    const response = await products_tb.insertOne(seller_info);
    client.close();
    return response;

  } catch (error) {
    console.log(error);
    client.close();
  }
  
}

//Create API endpoint to see all items I have posted as a seller (input: seller_id; output: seller's products)
async function retrieveProductsInDb(uri_, seller_info) {
  try {
  const client = await  MongoClient.connect(uri_, {
    useUnifiedTopology: true, serverApi: ServerApiVersion.v1
  });
  const db = client.db("boreal_db");
  var products_tb = db.collection("products");
  const response = await products_tb.find({"seller_id": seller_info.seller_id},{
  }).toArray();
  client.close();
  return response;
} catch(error) {
  client.close();
  console.log(error);
}
}



app.post('/storeUserAccountInfo', function(req, res) {
  console.log(req.body);
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  writeNewUserProfileToDb(uri, req.body).then(response => {console.log(response); res.send(response)});
});

app.post('/updateUserAccountInfo', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  updateUserProfileToDb(uri, req.body).then(response => {console.log(response); res.send(response)});
});

app.post('/verifyUserAccountInfo', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  validateUserProfileToDb(uri, req.body).then(response => {console.log(response); res.send(response)});
});
//Create API endpoint to see all items I have posted as a seller
app.get("/retrieveProducts", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });

  retrieveProductsInDb(uri, req.body).then((response) => {
    res.send(response);
  });
});

//Create an API endpoint to add a product to the database
app.post('/storeSellerProductInfo', function(req, res) {
  console.log(req.body);
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  writeNewSellerProductToDb(uri, req.body).then(response => {console.log(response); res.send(response)});
});

app.get("/retrieveOrder", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });

  retrieveOrderInDb(uri, req.body).then((response) => {
    res.send(response);
  });
});
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

app.listen(3001, () => console.log('Listening on port 3001...'));

