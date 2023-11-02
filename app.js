const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://snehpatel235:HelloHello@1234@cluster0.lmz2lln.mongodb.net/simpleCrudApp'


const app = express()

mongoose.connect(url, {useNewUrlParser:true}).then(()=>{
    console.log("Connected to mongoDB successfully!");
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})
