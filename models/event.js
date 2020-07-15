const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Event',eventSchema)