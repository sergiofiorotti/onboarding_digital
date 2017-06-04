const fs = require('fs')
const path = require('path')

const modelsPath = path.resolve('models')

module.exports = () => fs
	.readdirSync(modelsPath)
	.filter(file => /\.js$/.test(file))
	.forEach(file => require(`${modelsPath}/${file}`))
