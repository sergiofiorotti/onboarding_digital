const mongoose = require('./models/base/mongoose')
const mongodb = require('./config/mongodb')()

module.exports = mongoose.connect(mongodb.connection.url, mongodb.options, (err) => {
	if (err) throw err
})
