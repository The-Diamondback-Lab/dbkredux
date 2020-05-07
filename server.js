const fs = require('fs').promises
const express = require('express')
const next = require('next')
const routes = require('./routes')
const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()
    const adsTxtPromise = fs.readFile('./ads.txt', { encoding: 'utf-8' })

    server.get('/ads.txt', (_, res) => {
      adsTxtPromise.then(data => res.send(data))
    })

    server.get('/looking-back-2020', (_, res) => {
      res.redirect('https://wps3.dbknews.com/uploads/2020/04/Looking_Back_2020.pdf')
    })

    server.get('/coloring-book-2020', (_, res) => {
      res.redirect('https://wps3.dbknews.com/uploads/2020/04/DBK-ColoringBook-2020.pdf')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  }).catch((exception) => {
    console.error(exception.stack)
    process.exit(1)
  })
