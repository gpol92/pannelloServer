const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
PORT = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
async function connectToDatabase () {
    try {
        const client = await mongoose.connect('mongodb://localhost:27017/ServerList');
        console.log('connesso al database')
    } catch (err) {
        console.error(err);
    }
}
connectToDatabase();


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})