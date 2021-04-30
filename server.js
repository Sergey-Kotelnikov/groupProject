const express = require('express');
const app = express();
const dotenv = require('dotenv')
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
dotenv.config()

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = 'posts'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    console.log(`Connected to ${dbName} Database`)
    db = client.db(dbName)
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/registerPage', (req, res) => {
  res.render('registerPage.ejs')
})

app.get('/feedPage', (req, res) => {
  res.render('feedPage.ejs')
})

app.get('/mainPage', (req, res) => {
  res.render('mainPage.ejs')
})

// app.post('/add', (request, response) => { })

// app.put('/add', (request, response) => { })

// app.delete('/delete', (request, response) => { })


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})