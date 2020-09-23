const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}))

const config = require('./config')

mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

const Users = require('./routes/auth')
const Home = require('./routes/home')

app.use('/auth', Users)
app.use('/', Home)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`)
})