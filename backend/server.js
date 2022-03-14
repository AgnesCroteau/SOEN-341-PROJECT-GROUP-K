
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dev:hCoYCjUTGFKEC2IK@boreal.vaa1q.mongodb.net/boreal_db?retryWrites=true&w=majority";

const express = require('express');
const { response } = require('express');
const app = express();

async function getProductsFromDatabase(uri_) {
  const client = await MongoClient.connect(uri_, {
    useUnifiedTopology: true, serverApi: ServerApiVersion.v1
  });
  const db = client.db("boreal_db");
  var products_tb = db.collection("products");
  let allproducts = await products_tb.find().toArray();
  
  client.close();
  return allproducts;
}

async function writeNewUserProfileToDb(uri_, user_info) {
  try {
    const client = await  MongoClient.connect(uri_, {
      useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    });
    const db = client.db("boreal_db");
    var users_tb = db.collection("user_accounts_info");
    await users_tb.insertOne(user_info);
    client.close();

  } catch (error) {
    console.log(error);
  }
  
}

async function updateUserProfileToDb(uri_, user_info) {
  try {
    const client = await  MongoClient.connect(uri_, {
      useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    });
    const db = client.db("boreal_db");
    var users_tb = db.collection("user_accounts_info");
    await users_tb.updateOne({"_id": user_info._id},{
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
  } catch(error) {
    console.log(error);
  }
}


let products;

app.post('/storeUserAccountInfo', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  writeNewUserProfileToDb(uri, req.body).then(response => console.log(response));
});

app.post('/updateUserAccountInfo', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });
  updateUserProfileToDb(uri, req.body).then(response => console.log);
});

getProductsFromDatabase(uri).then(response => { products = response; });

app.get('/getAllProducts', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  res.send(products);
});

app.listen(3001, () => console.log('Listening on port 3001...'));

