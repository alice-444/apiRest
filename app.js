const express = require('express')
const mongoose = require("mongoose")
const musicRoute = require("./routes/musicRoute.js")
const voteRoute = require("./routes/voteRoute.js")

const app = express()
const port = 3000

mongoose.connect('mongodb://0.0.0.0:27017/apiPlatformMusic')

app.use(express.urlencoded())
app.use(express.json())

app.use('/musics', musicRoute)
app.use('/', voteRoute)


app.listen(port, () => console.log(`Listening on : ${port}`))