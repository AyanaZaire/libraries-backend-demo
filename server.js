// PART 1
const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors')
app.use(cors())