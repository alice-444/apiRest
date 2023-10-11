const mongoose = require("mongoose")
const Schema = mongoose.Schema

let musicSchema = new Schema({
    url:{
        type: String,
        required: "URL can\'t be empty",
        unique: true
    },

    last_name:{
        type:String,
        required:true,
    },

    first_name:{
        type:String,
        required:true,
    },
    mail : {
        type: String,
        required: true,
        unique: true,
    },
    submission_date : {
        type:Date,
        default: Date.now(),
    }
})

musicSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

module.exports = mongoose.model('Music', musicSchema)