const express = require('express');
const app = express()
PORT = 3000
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017/serverPanelDB')
const nomeDB = "pannelloServer"
async function connectToDatabase() {
    database = client.db(nomeDB);
    return database
};

connectToDatabase();

collection = database.collection("users")

app.post('/accedi.html', (req, res) => {
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})