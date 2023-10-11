const express = require('express')
const mongoose = require("mongoose")

const app = express()
const port = 3000

mongoose.connect('mongodb://0.0.0.0:27017/apinode')

app.use(express.urlencoded())
app.use(express.json())

app.listen(port, () => console.log(`Listening on : ${port}`))