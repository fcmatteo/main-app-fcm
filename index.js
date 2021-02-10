const express = require('express')
const dependency = require('dependency-fcm')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send(dependency))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
