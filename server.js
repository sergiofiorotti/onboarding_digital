var cors = require('cors')
const express = require('express')

const clientRouter = require('./modules/client/route')
const imageRouter = require('./modules/image/route')
const processRouter = require('./modules/process/route')

const app = express()
app.use(cors())

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	
	extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var allowCors = function(req, res, next){
	
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
}

app.use(clientRouter.router)
app.use(imageRouter.router)
app.use(processRouter.router)

app.listen(3000, function () {
  console.log('UX Match! api listening on port 3000!')
});