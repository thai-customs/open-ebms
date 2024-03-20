const express = require('express')
const router = express()
const package = require('../package.json')
const { name, version, author, license } = package

router.options('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  res.sendStatus(200)
})
router.get('/', (req, res) => {
  res.json({
    status: 200, result: { name, version, author, license }
  })
})

module.exports = router