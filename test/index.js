var test = require('tape')
var openapiUtils = require('../.')

test('functions should be available in module', function (t) {
  t.plan(2)
  t.equal(typeof openapiUtils.pathForUri, 'function', 'pathForUri is a function')
  t.equal(typeof openapiUtils.paramToSchema, 'function', 'paramToSchema is a function')
  t.end()
})
