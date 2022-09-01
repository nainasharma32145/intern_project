const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    index : {
        type : Number,
        required: true
    },
    course_outcome : {
        type : String,
        required: true
    },
    direct : String,
    indirect : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;