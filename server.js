const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send({message: "SBA API Admin Panel"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})