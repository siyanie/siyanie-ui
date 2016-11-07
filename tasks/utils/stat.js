const { stat } = require('fs')
const prms = require('./prms')

module.exports = prms(stat)
