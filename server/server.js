const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, './../index.html')
    const bundlePath = express.static(path.join(__dirname, './../public'))

    app.use('/public', bundlePath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}