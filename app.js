const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/peeps/new', function (req, res) {
  res.render('new', { })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
