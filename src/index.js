const { static } = require('express')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('./routes/routes'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Server port on 3000');
})