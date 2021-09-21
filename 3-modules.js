//CommonJS - every file is module (by defaults)
// Modules - encapsulated code(only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenede')

sayHi('Susan')
sayHi(names.ram)
sayHi(names.hari)


