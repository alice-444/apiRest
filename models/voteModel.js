const mongoose = require("mongoose")
const Schema = mongoose.Schema

let voteSchema = new Schema({
    note: {
        type:Number,
    },
    music_id : {
        type:String,
    }
})

module.exports = mongoose.model('Vote', voteSchema)