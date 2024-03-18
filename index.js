const express = require('express')
const package = require('./package.json')
const app = express()
const port = 3000
const { name, version, author, license } = package
app.get('/', (req, res) => {
  res.send({
    status: 200, result: { name, version, author, license }
  })
})
app.listen(port, () => {
  console.log(`${name} (${version}) app listening on port ${process.env.PORT}`)
})