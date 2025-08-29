// Using Express.js In JavaScript.
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!..')
})

app.get('/about', (req, res) => {
  console.log(req.query.name)
  res.send('Hello World!!..')
})

app.get('/service', (req, res) => {
  res.send('Hello World!!..')
})

app.get('/product', (req, res) => {
  res.send('Hello World!!..')
})

app.listen(port, () => {
  console.log(`This App Listing On Port http://localhost:${port}`)
})