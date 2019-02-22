// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const compression = require('compression')  
 
// With express
const express = require('express')
app.prepare().then(() => {
  const server = express()
  server.use(compression())
  server.use(handler).listen(3000)
})