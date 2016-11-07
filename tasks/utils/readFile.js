const { readFile } = require('fs')
const prms = require('./prms')

module.exports = prms(readFile)
