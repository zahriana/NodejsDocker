const express = require('express')
const app = express()

app.get('/', (req,res) => res.send('Ini adalah contoh aplikasi sederhana NodeJS'))
app.listen(8888, () =>console.log(`Server REady`))
