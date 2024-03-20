const express = require('express')
const app = express()
const router = require('./interfaces/webservice')
const port = process.env.PORT || 3000
app.use('/ebms', router)
app.listen(port, () => {
  console.log(`[${new Date().toISOString()}] app listening on port ${port}`)
})