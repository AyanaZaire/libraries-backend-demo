// PART 1
const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors')
app.use(cors())

// PART 2 SET UP
require('dotenv').config();

// Test URI access
console.log(process.env.MONGO_URI)

const mongoose = require('mongoose')
//Connect to Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Test for successful database connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// PART 3 SET UP

// Specifying Application port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Your app is listening on port: ${port}`)
})