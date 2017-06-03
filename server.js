var cors = require('cors')
const express = require('express')

const clientRouter = require('./modules/client/route')
const imageRouter = require('./modules/image/route')
const processRouter = require('./modules/process/route')

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(clientRouter.router)
app.use(imageRouter.router)
app.use(processRouter.router)

app.listen(3000, function () {
  console.log('UX Match! api listening on port 3000!')
})