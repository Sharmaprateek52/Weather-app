const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is update on dev')
})

app.listen(port, () => {
  console.log(`Example application listening at http://localhost:${port}`);
})