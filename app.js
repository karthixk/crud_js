const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/eventDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const eventRouter = require('./routes/events')
app.use('/events',eventRouter)

app.listen(9000, () => {
    console.log('Server started')
})