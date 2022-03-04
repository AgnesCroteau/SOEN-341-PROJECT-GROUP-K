
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dev:hCoYCjUTGFKEC2IK@boreal.vaa1q.mongodb.net/boreal_db?retryWrites=true&w=majority";

const express = require('express');
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
let products;

getProductsFromDatabase(uri).then(response => { products = response; });

app.get('/getAllProducts', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  res.send(products);
});

app.listen(3001, () => console.log('Listening on port 3001...'));