const {
  Router
} = require('express')
const router = Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const config = require('../config.js')

router.use(cors())
process.env.SECRET_KEY = config.secretkey


router.post('/register', async (req, res) => {
  const userData = {
    username: req.body.username,
    password: req.body.password,
    group: req.body.group
  }
  const user = await User.findOne({
    username: userData.username
  })
  if (!user) {
    bcrypt.hash(userData.password, 10, (err, hash) => {
      userData.password = hash
      User.create(userData)
        .then(user => {
          res.json({
            status: user.username + ' зарегистрирован'
          })
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    })
  } else {
    res.json({
      error: 'Пользователь существует'
    })
  }
})

router.post('/login', async (req, res) => {
  User.findOne({
      username: req.body.username
    })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            username: user.username,
            group: user.group
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          res.json({
            error: 'User does not exist'
          })
        }
      } else {
        res.json({
          error: 'User does not exist'
        })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router