const express= require('express')
const ConnectDB = require('./Config/ConnectDB')
const ContactRouter = require('./Routes/Contact')

const app= express()

const port= 5000

ConnectDB()

app.use(express.json())

app.use('/api/contact', ContactRouter)


app.listen(port,console.log(`Server is running on the ${port}`))