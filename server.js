const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()
const morgan = require('morgan')

// parsing application/json
app.use(bodyParser.json())

// logging
app.use(morgan('dev'))

const getUser = require('./getUser.js')
const postUser = require('./postUser.js')
const postUserLogin = require('./postUserLogin.js')
const getChoir = require('./getChoir.js')
const getChoirMembers = require('./getChoirMembers.js')
const postChoir = require('./postChoir.js')
const postChoirJoin = require('./postChoirJoin.js')
const postChoirSong = require('./postChoirSong.js')

app.get('/user', async (req, res) => {
  const response = await getUser(req.query)
  res.status(response.statusCode).send(response.body)
})

app.post('/user', async (req, res) => {
  const response = await postUser(req.body)
  res.status(response.statusCode).send(response.body)
})

app.post('/user/login', async (req, res) => {
  const response = await postUserLogin(req.body)
  res.status(response.statusCode).send(response.body)
})

app.get('/choir', async (req, res) => {
  const response = await getChoir(req.query)
  res.status(response.statusCode).send(response.body)
})

app.get('/choir/members', async (req, res) => {
  const response = await getChoirMembers(req.query)
  res.status(response.statusCode).send(response.body)
})

app.post('/choir', async (req, res) => {
  const response = await postChoir(req.body)
  res.status(response.statusCode).send(response.body)
})

app.post('/choir/join', async (req, res) => {
  const response = await postChoirJoin(req.body)
  res.status(response.statusCode).send(response.body)
})

app.post('/choir/song', async (req, res) => {
  const response = await postChoirSong(req.body)
  res.status(response.statusCode).send(response.body)
})

app.listen(port, () => console.log(`Choirless API test app listening at http://localhost:${port}`))
