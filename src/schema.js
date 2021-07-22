const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    title: {
        type: String,
        minlenght: 2,
        required: true
    },
    description : {
        type: String,
        minlenght: 2,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    starred: {
        type: Boolean,
        default: false
    }
})

module.exports = productsSchema