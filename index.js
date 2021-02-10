const express = require('express')
const dependency = require('dependency-fcm')

express()
  .get('/', (req, res) => res.send(dependency))
  .listen(80, () => console.log(`Listening on 80`))